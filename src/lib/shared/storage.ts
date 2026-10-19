export enum StorageKey {
    fontSettings = 'fontSettings'
}

export interface Storable<T> {
    get storageKey(): StorageKey;
    get serialize(): string;
    deserialize(value: string | null): T | null;
}

export class StorageUtil {
    static save<T>(value: Storable<T>): void {
        try {
            localStorage.setItem(value.storageKey, value.serialize);
        } catch(e) {}
    }

    static getJson<T>(key: StorageKey): string | null {
        try {
            const ret = localStorage.getItem(key);
            return ret;
        } catch(e) {
            return null;
        }
    }

    static getItem<T>(storable: Storable<T>): T | null {
        try {
            return storable.deserialize(StorageUtil.getJson(storable.storageKey));
        } catch(e) {
            return null;
        }
    }

    static removeItem(key: StorageKey): void {
        try {
            localStorage.removeItem(key);
        } catch(e) {}
    }

    static clear(): void {
        try {
            localStorage.clear();
        } catch(e) {}
    }
}
