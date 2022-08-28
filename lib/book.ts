import {TranslationContext} from "./translations";

export class Book {
    id: string;
    name: string;
    landingText: string;
    bookTexture: string;
    fillerTexture: string;
    craftingTexture: string;
    model: string;
    version: string;
    subtitle: string;
    creativeTab: string;
    pamphlet: boolean;

    toJson(translationContext: TranslationContext): any {
        return {
            "name": translationContext.addTranslation("name", this.name),
            "landing_text": translationContext.addTranslation("landing_text", this.landingText),
            "book_texture": this.bookTexture.length === 0 ? undefined : this.bookTexture,
            "filler_texture": this.fillerTexture.length === 0 ? undefined : this.fillerTexture,
            "crafting_texture": this.craftingTexture.length === 0 ? undefined : this.craftingTexture,
            "model": this.model.length === 0 ? undefined : this.model,
            "version": this.version.length === 0 ? undefined : this.version,
            "subtitle": this.subtitle.length === 0 ? undefined : translationContext.addTranslation("subtitle", this.subtitle),
            "creativeTab": this.creativeTab.length === 0 ? undefined : this.creativeTab,
            "pamphlet": this.pamphlet ? true : undefined
        }
    }
}