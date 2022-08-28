import {Page} from "./page";
import {Book} from "./book";
import {TranslationContext} from "./translations";
import Category from "./category";

export class Entry {
    name: string;
    icon: string;
    pages: Page[];

    toJson(category: Category, book: Book, translationContext: TranslationContext): any {
        return {
            'name': translationContext.addTranslation("name", this.name),
            'category': category,
            'icon': this.icon,
            'pages': this.pages.map((p, i) => p.toJson(book, translationContext.create(i.toString())))
        }
    }
}