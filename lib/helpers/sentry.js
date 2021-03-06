import * as Sentry from '@sentry/browser';

const isLocalhost = () => document.location.host.startsWith('localhost');

const isProduction = (host) => host === 'mail.protonmail.com' || host === 'account.protonvpn.com';

function main({ SENTRY_DSN, COMMIT_RELEASE, APP_VERSION }) {
    // No need to configure it if we don't load the DSN
    if (!SENTRY_DSN || isLocalhost()) {
        return;
    }

    const { host } = document.location;

    // Assumes SENTRY_DSN is: https://111b3eeaaec34cae8e812df705690a36@sentry/11
    // To get https://111b3eeaaec34cae8e812df705690a36@mail.protonmail.com/api/reports/sentry/11
    const dsn = SENTRY_DSN.replace('sentry', `${host}/api/reports/sentry`);

    Sentry.init({
        dsn,
        release: isProduction(host) ? APP_VERSION : COMMIT_RELEASE,
        environment: host,
        beforeSend(event) {
            if (event && 'error' in event && event.error?.stack) {
                // Filter out broken ferdi errors
                if (event.error.stack.includes(/ferdi/i)) {
                    return null;
                }
            }
            return event;
        },
        ignoreErrors: [
            // Ignore random plugins/extensions
            'top.GLOBALS',
            'canvas.contentDocument',
            'MyApp_RemoveAllHighlights',
            'atomicFindClose',
            'conduitPage',
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1678243
            'XDR encoding failure',
            'Request timed out',
            'No network connection',
            'Failed to fetch',
            'NetworkError when attempting to fetch resource.',
            'No network connection',
        ],
    });

    Sentry.configureScope((scope) => {
        scope.setTag('appVersion', APP_VERSION);
    });
}

export const traceError = (e) => !isLocalhost() && Sentry.captureException(e);

export default main;
