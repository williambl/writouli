import {Entry} from "./entry";
import {TranslationContext} from "./translations";
import {Book} from "./book";

export default class Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    parent: string;
    flag: string;
    secret: boolean;
    entries: Entry[];

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