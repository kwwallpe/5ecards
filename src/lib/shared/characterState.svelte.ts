import { type Storable, StorageKey, StorageUtil } from './storage.ts';
import { slugify } from './utils.svelte.ts';

export const characterContextKey = Symbol('characterSettings');
export const characterNameId: string = 'character-name' as const;

const NAME = 'name' as const;
const TEXTS = 'texts' as const;
const CHECKS = 'checks' as const;

type CharacterTextRecord = Record<string, string>;
type CharacterCheckRecord = Record<string, boolean>;

type CharacterSettings = {
  [NAME]: string;
  [TEXTS]: CharacterTextRecord;
  [CHECKS]: CharacterCheckRecord;
};

export class Character implements Storable<Character> {
  settings: CharacterSettings = $state<CharacterSettings>(Character.defaultSettings);

  constructor(settings?: CharacterSettings | null) {
    this.settings = settings || Character.defaultSettings;
  }

  get slug(): string {
    return slugify(this.settings[NAME]);
  }

  static get defaultSettings(): CharacterSettings {
    return {
      [NAME]: '',
      [TEXTS]: {},
      [CHECKS]: {},
    };
  }

  static get storageKey(): StorageKey {
    return StorageKey.currentCharacter;
  }

  getCheck(id: string): boolean {
    return this.settings[CHECKS][id] || false;
  }
  setCheck(id: string, value: boolean) {
    if (value === true) {
      this.settings[CHECKS][id] = value;
    } else {
      delete this.settings[CHECKS][id];
    }
    this.save();
  }

  getText(id: string): string {
    return this.settings[TEXTS][id] || '';
  }
  setText(id: string, value: string) {
    if (id == characterNameId) {
      this.settings[NAME] = value;
    }
    if (value) {
      this.settings[TEXTS][id] = value;
    } else {
      delete this.settings[TEXTS][id];
    }
    this.save();
  }

  get serialize(): string {
    return JSON.stringify(this.settings);
  }

  static deserialize(value: string | null): Character {
    const parsed: CharacterSettings | null = value ? JSON.parse(value) : null;
    return new Character(parsed);
  }

  save(): void {
    StorageUtil.save(Character, this);
  }
}

export class CharacterAccessor {
  id: string;
  character: Character;

  constructor(id: string, character: Character) {
    this.id = id;
    this.character = character;
  }

  static settingsFromStorage(): Character | null {
    return StorageUtil.getItem(Character);
  }

  get check(): boolean {
    return this.character.getCheck(this.id);
  }
  set check(value: boolean) {
    this.character.setCheck(this.id, value);
  }

  get text(): string {
    return this.character.getText(this.id);
  }
  set text(value: string) {
    this.character.setText(this.id, value);
  }

  clear(): void {
    this.character = new Character();
    this.character.save();
  }
}
