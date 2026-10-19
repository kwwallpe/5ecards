export enum StorageKey {
  fontSettings = 'fontSettings',
  currentCharacter = 'currentCharacter',
}

export interface Storable<T> {
  save(): void;
  get serialize(): string;
}

export interface StorableStatic<T> {
  new (): Storable<T>;
  get storageKey(): StorageKey;
  deserialize(value: string | null): T | null;
}

export class StorageUtil {
  static save<T>(StorableClass: StorableStatic<T>, instance: Storable<T>): void {
    try {
      localStorage.setItem(StorableClass.storageKey, instance.serialize);
    } catch (e) {}
  }

  static getJson<T>(key: StorageKey): string | null {
    try {
      const ret = localStorage.getItem(key);
      return ret;
    } catch (e) {
      return null;
    }
  }

  static getItem<T>(StorableClass: StorableStatic<T>): T | null {
    try {
      return StorableClass.deserialize(StorageUtil.getJson(StorableClass.storageKey));
    } catch (e) {
      return null;
    }
  }

  static removeItem(key: StorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (e) {}
  }
}
