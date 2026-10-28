export enum StorageKey {
  fontSettings = 'fontSettings',
  currentCharacter = 'currentCharacter',
}

export interface Storable {
  save(): void;
  get serialize(): string;
}

export interface StorableStatic<T> {
  new (): Storable;
  get storageKey(): StorageKey;
  deserialize(value: string | null): T | null;
}

export class StorageUtil {
  static save<T>(StorableClass: StorableStatic<T>, instance: Storable): void {
    try {
      localStorage.setItem(StorableClass.storageKey, instance.serialize);
    } catch {
      // local storage unavailable
    }
  }

  static getJson(key: StorageKey): string | null {
    try {
      const ret = localStorage.getItem(key);
      return ret;
    } catch {
      return null;
    }
  }

  static getItem<T>(StorableClass: StorableStatic<T>): T | null {
    try {
      return StorableClass.deserialize(StorageUtil.getJson(StorableClass.storageKey));
    } catch {
      return null;
    }
  }

  static removeItem(key: StorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // local storage unavailable
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch {
      // local storage unavailable
    }
  }
}
