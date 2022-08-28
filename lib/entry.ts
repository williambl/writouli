import {Page} from "./page";
import {Book} from "./book";
import {TranslationContext} from "./translations";
import Category from "./category";

export class Entry {
    id: string;
    name: string;
    icon: string;
    pages: Page[];

    constructor(id: string, name: string, icon: string, pages: Page[]) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.pages = pages;
    }

    toJson(category: Category, book: Book, translationContext: TranslationContext): any {
        return {
            'name': translationContext.addTranslation("name", this.name),
            'category': category,
            'icon': this.icon,
            'pages': this.pages.map((p, i) => p.toJson(book, translationContext.create(i.toString())))
        }
    }
}