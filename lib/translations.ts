export class Translations {
    translations: Map<string, string> = new Map();
}

export class TranslationContext {
    prefix: string;
    translations: Translations;

    constructor(s: string, t: Translations) {
        this.prefix = s;
        this.translations = t;
    }

    create(newPrefix: string): TranslationContext {
        return new TranslationContext(this.prefix + "." + newPrefix, this.translations);
    }

    addTranslation(key: string, value: string): string {
        const newKey = this.prefix + "." + key;
        this.translations.translations.set(newKey, value);
        return newKey;
    }
}