import { setItem, getItem, removeItem } from '../helpers/storage';
import { deserializeUint8Array } from '../helpers/serialization';
import isTruthy from '../helpers/isTruthy';
import { PersistedSession, PersistedSessionBlob } from './SessionInterface';
import { getValidatedLocalID } from './sessionForkValidation';
import { InvalidPersistentSessionError } from './error';
import { getDecryptedBlob, getEncryptedBlob, getSessionKey } from './sessionBlobCryptoHelper';

const STORAGE_PREFIX = 'ps-';
const getKey = (localID: number) => `${STORAGE_PREFIX}${localID}`;

export const removePersistedSession = (localID: number) => {
    removeItem(getKey(localID));
};

export const getPersistedSession = (localID: number): PersistedSession | undefined => {
    const itemValue = getItem(getKey(localID));
    if (!itemValue) {
        return;
    }
    try {
        const parsedValue = JSON.parse(itemValue);
        return {
            UID: parsedValue.UID || '',
            blob: parsedValue.blob || '',
        };
    } catch (e) {
        return undefined;
    }
};

export const getPersistedSessions = () => {
    const localStorageKeys = Object.keys(localStorage);
    return localStorageKeys
        .filter((key) => key.startsWith(STORAGE_PREFIX))
        .map((key) => {
            const localID = getValidatedLocalID(key.slice(STORAGE_PREFIX.length));
            if (localID === undefined) {
                return;
            }
            const result = getPersistedSession(localID);
            if (!result) {
                return;
            }
            return {
                ...result,
                localID,
            };
        })
        .filter(isTruthy);
};

export const getPersistedSessionBlob = (blob: string): PersistedSessionBlob | undefined => {
    try {
        const parsedValue = JSON.parse(blob);
        return {
            keyPassword: parsedValue.keyPassword || '',
        };
    } catch (e) {
        return undefined;
    }
};

export const getDecryptedPersistedSessionBlob = async (
    ClientKey: string,
    persistedSessionBlobString: string
): Promise<PersistedSessionBlob> => {
    const sessionKey = getSessionKey(deserializeUint8Array(ClientKey));
    const blob = await getDecryptedBlob(sessionKey, persistedSessionBlobString).catch(() => {
        throw new InvalidPersistentSessionError('Failed to decrypt persisted blob');
    });
    const persistedSessionBlob = getPersistedSessionBlob(blob);
    if (!persistedSessionBlob) {
        throw new InvalidPersistentSessionError('Failed to parse persisted blob');
    }
    return persistedSessionBlob;
};

export const getEncryptedPersistedSessionBlob = async (ClientKey: string, blob: PersistedSessionBlob) => {
    const sessionKey = getSessionKey(deserializeUint8Array(ClientKey));
    return getEncryptedBlob(sessionKey, JSON.stringify(blob));
};

export const setPersistedSessionWithBlob = async (
    localID: number,
    data: { UID: string; clientKey: string; keyPassword: string }
) => {
    const persistedSession: PersistedSession = {
        UID: data.UID,
        blob: await getEncryptedPersistedSessionBlob(data.clientKey, { keyPassword: data.keyPassword }),
    };
    setItem(getKey(localID), JSON.stringify(persistedSession));
};

export const setPersistedSession = (localID: number, data: { UID: string }) => {
    const persistedSession: PersistedSession = {
        UID: data.UID,
    };
    setItem(getKey(localID), JSON.stringify(persistedSession));
};
