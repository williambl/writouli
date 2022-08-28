import {Page} from "./page";
import {Book} from "./book";
import {TranslationContext} from "./translations";
import Category from "./category";
import {randInt} from "./util";

export class Entry {
    key: number;
    id: string;
    name: string;
    icon: string;
    pages: Page[];

    constructor(id: string, name: string, icon: string, pages: Page[]) {
        this.key = randInt(0, 50000);
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.pages = pages;
    }

    toJson(category: Category, book: Book, translationContext: TranslationContext): any {
        return {
            'name': translationContext.addTranslation("name", this.name),
            'category': book.id.split(":")[0] + ":" + category.id,
            'icon': this.icon,
            'pages': this.pages.map((p, i) => p.toJson(book, translationContext.create(i.toString())))
        }
    }
}