import { type Storable, StorageKey, StorageUtil } from './storage.ts';

const OPENDYSLEXIC = "OpenDyslexic";
const DEFAULTS = [
    "Arial", "Arial Black", "Helvetica", "Sans-Serif", "Times New Roman", "Times", "Serif", "Courier New", "Verdana"
];
const GOOGLE = [
    "Roboto", "Roboto Serif", "Merriweather", "Source Code Pro", "PT Serif", "Indie Flower", "Caveat", "Lobster Two",
    "PlayPen Sans"
];

export enum FontRole {
  label = 'LABEL',
  input = 'INPUT'
}
const FONT = 'font' as const;
const ADJUST = 'adjust' as const;
const ADJUSTMENTS = 'adjustments' as const;

export const fontSettingsContextKey = Symbol("fontSettings");

type FontAdjustmentsRecord = Record<string, number>;
type RoleSettingValue = {
  [FONT]: string;
  [ADJUST]: number;
  [ADJUSTMENTS]: FontAdjustmentsRecord;
}
type FontSettingsRecord = Record<FontRole, RoleSettingValue>;

class FontSettings implements Storable<FontSettings> {
  settings: FontSettingsRecord = $state<FontSettingsRecord>(FontSettings.defaultSettings);

  constructor(settings?: FontSettingsRecord | null) {
    this.settings = settings || FontSettings.defaultSettings;
  }

  static get defaultFont(): string {
    return OPENDYSLEXIC;
  }
  static get defaultWordSpacing(): string {
    return "-0.4em";
  }
  static get defaultAdjust(): number {
    return 0.58;
  }
  static get otherAdjust(): number {
    return 0.8;
  }
  static get defaultAdjustments(): FontAdjustmentsRecord {
    return {
      [FontSettings.defaultFont]: FontSettings.defaultAdjust
    };
  }
  static get defaultSettings(): FontSettingsRecord {
    return {
      [FontRole.label]: {
        [FONT]: FontSettings.defaultFont,
        [ADJUST]: FontSettings.defaultAdjust,
        [ADJUSTMENTS]: FontSettings.defaultAdjustments
      },
      [FontRole.input]: {
        [FONT]: FontSettings.defaultFont,
        [ADJUST]: FontSettings.defaultAdjust,
        [ADJUSTMENTS]: FontSettings.defaultAdjustments
      }
    };
  }
  static get fontNames(): Array<string> {
      const merged = [...DEFAULTS, ...GOOGLE].sort();
      return [OPENDYSLEXIC, ...merged];
  }
  static get storageKey(): StorageKey {
    return StorageKey.fontSettings;
  }
  get storageKey(): StorageKey {
    return FontSettings.storageKey;
  }

  static getSuggestedAdust(font: string): number {
   return font == FontSettings.defaultFont ? FontSettings.defaultAdjust : FontSettings.otherAdjust;
  }

  static getWordSpacing(font: string): string {
    return font == FontSettings.defaultFont ? FontSettings.defaultWordSpacing: "normal";
  }

  getFont(role: FontRole): string {
    return this.settings[role][FONT];
  }
  setFont(role: FontRole, font: string) {
    this.settings[role][FONT] = font;
    const adjust = this.settings[role][ADJUSTMENTS][font];

    if (adjust) {
      this.setAdjust(role, adjust);
    } else {
      this.resetAdjust(role);
    }
  }

  getAdjust(role: FontRole): number {
    return this.settings[role][ADJUST];
  }
  setAdjust(role: FontRole, adjust: number) {
    this.settings[role][ADJUST] = adjust;
    this.updateFontAdjustment(role);
  }

  getAdjustments(role: FontRole): FontAdjustmentsRecord {
    return this.settings[role][ADJUSTMENTS]
  }
  setAdjustments(role: FontRole, adjustments: FontAdjustmentsRecord) {
    this.settings[role][ADJUSTMENTS] = adjustments;
  }

  static serialize(settings: FontSettingsRecord): string {
    return JSON.stringify(settings);
  }
  get serialize(): string {
    return FontSettings.serialize(this.settings);
  } 
  static deserialize(value: string | null): FontSettings {
     const parsed: FontSettingsRecord | null = value ? JSON.parse(value) : null;
     return new FontSettings(parsed);
  }
  deserialize(value: string | null): FontSettings {
    return FontSettings.deserialize(value);
  }

  updateFontAdjustment(role: FontRole): void {
    const font = this.settings[role][FONT];
    const adjust = this.settings[role][ADJUST];
    this.settings[role][ADJUSTMENTS][font] = adjust;
    this.save();
  }

  resetAdjustment(role: FontRole, all: boolean) {
    if (all) {
      this.setAdjustments(role, {});
    } else {
      const font = this.getFont(role);
      delete this.settings[role][ADJUSTMENTS][font];
    }
    this.resetAdjust(role);
  }

  resetAdjust(role: FontRole): void {
    this.settings[role][ADJUST] = FontSettings.getSuggestedAdust(this.settings[role][FONT]);
    this.save();
  }

  save(): void {
    StorageUtil.save(this);
  }
}

export class FontAccessor {
    settings: FontSettings;
    role: FontRole;

    constructor(settings: FontSettings, role: FontRole) {
        this.settings = settings;
        this.role = role;
    }

    static settingsFromStorage(): FontSettings {
      const json = StorageUtil.getJson(FontSettings.storageKey);
      return FontSettings.deserialize(json);
    }

    static get fontNames(): string[] {
      return FontSettings.fontNames;
    }

    get font(): string {
      return this.settings.getFont(this.role);
    }
    set font(font: string) {
      this.settings.setFont(this.role, font);
    }

    get adjust(): number {
      return this.settings.getAdjust(this.role);
    }
    set adjust(adjust: number) {
    this.settings.setAdjust(this.role, adjust);
  }
  
    get adjustments(): FontAdjustmentsRecord {
      return this.settings.getAdjustments(this.role);
    }
    set inputAdjustments(adjustments: FontAdjustmentsRecord) {
      this.settings.setAdjustments(this.role, adjustments);
    }

    get wordSpacing(): string {
      return FontSettings.getWordSpacing(this.font);
    }

    resetAdjustment(all: boolean = false) {
      this.settings.resetAdjustment(this.role, all);
    }
}