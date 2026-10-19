import { createContext } from 'svelte';
import { type Storable, StorageKey, StorageUtil } from './storage.ts';
import { slugify } from './utils.svelte.ts';

const VALUE = 'value' as const;
const SLUG = 'slug' as const;
const NAME = 'name' as const;
const ID = 'id' as const;
const TEXTS = 'texts' as const;
const CHECKS = 'checks' as const;

export const characterCollectionContextKey = Symbol("characterSettings");
export const characterNameContextKey = Symbol("characterName");

export type CharacterTextRecord = Record<string, string>;
export type CharacterCheckRecord = Record<string, boolean>;

export interface CharacterName {
    name: string;
}
export const [getCharacterName, setCharacterName] = createContext<CharacterName>();

class Character {
    name: string = $state("default");
    checks: CharacterCheckRecord = $state({});
    texts: CharacterTextRecord = $state({});

    constructor(name: string) {
        this.name = name;
    }

    get slug(): string {
        return CharacterCollection.slug(this.name);
    }

    getCheck(id: string): boolean {
        return this.checks[id] || false;
    }
    setCheck(id: string, value: boolean) {
        this.checks[id] = value;
    }

    getText(id: string): string {
        return this.texts[id] || "";
    }
    setText(id: string, value: string) {
        if (value) {
            this.texts[id] = value;
        } else {
            delete this.texts[id];
        }
    }
}

type CharacterCollectionRecord = Record<string, Character>;

export class CharacterCollection { //implements Storable<CharacterCollection> {
    characters: CharacterCollectionRecord =  $state({"default": new Character("default")});

    static slug(name: string): string {
        return slugify(name) || "default";
    }

    getCharacter(name: string): Character | null {
        return this.characters[CharacterCollection.slug(name)] || null;
    }
    setCharacter(name: string, character: Character | null) {
        const slug = CharacterCollection.slug(name);
        if (character) {
            this.characters[slug] = character;
        } else {
            delete this.characters[slug];
        }
    }

    getCheck(name: string, id: string): boolean {
        return this.characters[CharacterCollection.slug(name)]?.getCheck(id) || false;
    }
    setCheck(name: string, id: string, value: boolean) {
        this.characters[CharacterCollection.slug(name)]?.setCheck(id, value);
    }

    getText(name: string, id: string): string {
        return this.characters[CharacterCollection.slug(name)]?.getText(id) || "";
    }
    setText(name: string, id: string, value: string) {
        this.characters[CharacterCollection.slug(name)]?.setText(id, value);
    }
}

export class CharacterAccessor {
    collection: CharacterCollection;
    name: string;
    id: string;

    constructor(collection: CharacterCollection, name: string, id: string) {
        this.collection = collection;
        this.name = name;
        this.id = id;
    }

    static characterCollectionFromStorage(): CharacterCollection {
        return new CharacterCollection();
    }

    get check(): boolean {
        return this.collection.getCheck(this.name, this.id);
    }
    set check(value: boolean) {
        this.collection.setCheck(this.name, this.id, value);
    }

    get text(): string {
        return this.collection.getText(this.name, this.id);
    }
    set text(value: string) {
        this.collection.setText(this.name, this.id, value);
    }
}
