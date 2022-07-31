import {Page} from "./page";
import {Book} from "./book";
import {TranslationContext} from "./translations";

export class Entry {
    name: string;
    category: string;
    icon: string;
    pages: Page[];

    toJson(book: Book, translationContext: TranslationContext): any {
        return {
            'name': translationContext.addTranslation("name", this.name),
            'category': this.category,
            'icon': this.icon,
            'pages': this.pages.map((p, i) => p.toJson(book, translationContext.create(i.toString())))
        }
    }
}