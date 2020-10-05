import { c } from 'ttag';
import { cleanEmail, normalizeInternalEmail } from '../../helpers/email';
import { omit, pick } from '../../helpers/object';
import { Address } from '../../interfaces';
import { CalendarSettings, Participant, SETTINGS_NOTIFICATION_TYPE } from '../../interfaces/calendar';
import {
    VcalAttendeeProperty,
    VcalOrganizerProperty,
    VcalValarmComponent,
    VcalVcalendar,
    VcalVeventComponent,
    VcalVtimezoneComponent,
} from '../../interfaces/calendar/VcalModel';
import { ContactEmail } from '../../interfaces/contacts';
import { RequireSome } from '../../interfaces/utils';
import { getAttendeeEmail } from '../attendees';
import { ICAL_ATTENDEE_STATUS } from '../constants';
import { fromTriggerString, serialize } from '../vcal';
import { getAttendeePartstat, getAttendeeRole, getIsAlarmComponent, getIsAllDay } from '../vcalHelper';
import { withDtstamp } from '../veventHelper';

export const getParticipantHasAddressID = (
    participant: Participant
): participant is RequireSome<Participant, 'addressID'> => {
    return !!participant.addressID;
};

export const getParticipant = (
    participant: VcalAttendeeProperty | VcalOrganizerProperty,
    contactEmails: ContactEmail[],
    ownAddresses: Address[],
    emailTo: string
): Participant => {
    const emailAddress = getAttendeeEmail(participant);
    const normalizedEmailAddress = normalizeInternalEmail(emailAddress);
    const isYou = normalizeInternalEmail(emailTo) === normalizedEmailAddress;
    const selfAddress = ownAddresses.find(({ Email }) => normalizeInternalEmail(Email) === normalizedEmailAddress);
    const contact = contactEmails.find(({ Email }) => cleanEmail(Email) === cleanEmail(emailAddress));
    const participantName = isYou
        ? c('Participant name').t`You`
        : selfAddress?.DisplayName || contact?.Name || participant?.parameters?.cn || emailAddress;
    const result: Participant = {
        vcalComponent: participant,
        name: participantName,
        emailAddress,
    };
    const { partstat, role } = (participant as VcalAttendeeProperty).parameters || {};
    if (partstat) {
        result.partstat = getAttendeePartstat(participant);
    }
    if (role) {
        result.role = getAttendeeRole(participant);
    }
    if (selfAddress) {
        result.addressID = selfAddress.ID;
        result.displayName = selfAddress.DisplayName;
        // Use Proton form of the email address (important for sending email)
        result.emailAddress = selfAddress.Email;
    }
    return result;
};

interface CreateReplyIcsParams {
    prodId: string;
    attendee: Participant;
    partstat: ICAL_ATTENDEE_STATUS;
    organizer: Participant;
    vevent: Pick<VcalVeventComponent, 'uid' | 'dtstart' | 'dtend' | 'sequence' | 'recurrence-id'>;
    vtimezone?: VcalVtimezoneComponent;
}

export const createReplyIcs = ({
    prodId,
    attendee,
    partstat,
    organizer,
    vevent,
    vtimezone,
}: CreateReplyIcsParams): string => {
    const attendeeIcs = attendee.vcalComponent;
    const organizerIcs = organizer.vcalComponent;
    // use current time as dtstamp
    const replyVevent = withDtstamp({
        component: 'vevent',
        ...pick(vevent, ['uid', 'dtstart', 'dtend', 'sequence', 'recurrence-id']),
        organizer: organizerIcs,
        attendee: [
            {
                value: attendeeIcs.value,
                parameters: { partstat },
            },
        ],
    } as VcalVeventComponent);
    const replyVcal: RequireSome<VcalVcalendar, 'components'> = {
        component: 'vcalendar',
        components: [replyVevent],
        prodid: { value: prodId },
        version: { value: '2.0' },
        method: { value: 'REPLY' },
        calscale: { value: 'GREGORIAN' },
    };
    if (vtimezone) {
        replyVcal.components.unshift(vtimezone);
    }
    return serialize(replyVcal);
};

export const findAttendee = (email: string, attendees: VcalAttendeeProperty[] = []) => {
    const index = attendees.findIndex((attendee) => cleanEmail(getAttendeeEmail(attendee)) === cleanEmail(email));
    const attendee = index !== -1 ? attendees[index] : undefined;
    return { index, attendee };
};

export const getInvitedEventWithAlarms = (
    vevent: VcalVeventComponent,
    partstat: ICAL_ATTENDEE_STATUS,
    calendarSettings: CalendarSettings,
    oldPartstat?: ICAL_ATTENDEE_STATUS
) => {
    const { components } = vevent;
    const otherComponents = components?.filter((component) => !getIsAlarmComponent(component));

    if ([ICAL_ATTENDEE_STATUS.DECLINED, ICAL_ATTENDEE_STATUS.NEEDS_ACTION].includes(partstat)) {
        // remove all alarms in this case
        if (otherComponents?.length) {
            return {
                ...vevent,
                components: otherComponents,
            };
        }
        return omit(vevent, ['components']);
    }
    if (oldPartstat && [ICAL_ATTENDEE_STATUS.ACCEPTED, ICAL_ATTENDEE_STATUS.TENTATIVE].includes(oldPartstat)) {
        // Leave alarms as they are
        return { ...vevent };
    }

    // otherwise add calendar alarms
    const isAllDay = getIsAllDay(vevent);
    const notifications = isAllDay
        ? calendarSettings.DefaultFullDayNotifications
        : calendarSettings.DefaultPartDayNotifications;
    const valarmComponents = notifications
        .filter(({ Type }) => Type === SETTINGS_NOTIFICATION_TYPE.DEVICE)
        .map<VcalValarmComponent>(({ Trigger }) => ({
            component: 'valarm',
            action: { value: 'DISPLAY' },
            trigger: { value: fromTriggerString(Trigger) },
        }));

    return {
        ...vevent,
        components: components ? components.concat(valarmComponents) : valarmComponents,
    };
};
