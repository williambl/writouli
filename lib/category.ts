import {Entry} from "./entry";
import {TranslationContext} from "./translations";
import {Book} from "./book";
import {randInt} from "./util";

export default class Category {
    key: number;
    id: string;
    name: string;
    description: string;
    icon: string;
    parent: string;
    flag: string;
    secret: boolean;
    entries: Entry[];


    constructor(id: string, name: string, description: string, icon: string, parent: string, flag: string, secret: boolean, entries: Entry[]) {
        this.key = randInt(0, 50000);
        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.parent = parent;
        this.flag = flag;
        this.secret = secret;
        this.entries = entries;
    }

    toJson(book: Book, translationContext: TranslationContext): any {
        return {
            'name': translationContext.addTranslation("name", this.name),
            'description': translationContext.addTranslation("description", this.description),
            'icon': this.icon,
            'parent': this.parent.length === 0 ? undefined : this.parent,
            'flag': this.flag.length === 0 ? undefined : this.flag,
            'secret': this.secret ? true : undefined
        }
    }
}