import {string} from "prop-types";
import {Component} from "react";
import LabelledTextInput from "../components/LabelledTextInput";
import {EditorState} from "lexical";
import {Book} from "./book";
import {TranslationContext} from "./translations";

export class Page {
    constructor(key: number) {
        this.key = key;
        this.type = "";
        this.advancement = "";
        this.flag = "";
        this.anchor = "";
        this.customFields = [];
    }

    key: number;

    type: string;
    advancement: string;
    flag: string;
    anchor: string;

    customFields: PageField<any>[]

    toJson(book: Book, translationContext: TranslationContext): any {
        return {
            'type': this.type,
            'advancement': this.advancement.length === 0 ? undefined : this.advancement,
            'flag': this.flag.length === 0 ? undefined : this.flag,
            'anchor': this.anchor.length === 0 ? undefined : this.anchor,
            ...this.customFields.map(f => f.toJson(f.data, this, book, translationContext.create(f.name)))
        }
    }
}

export class PageField<T> {
    constructor(name: string, data: T, editorComponent: (changeField: (data: T) => void) => JSX.Element, toJson: (data: T, page: Page, book: Book, translationContext: TranslationContext) => any) {
        this.name = name;
        this.data = data;
        this.editorComponent = editorComponent;
        this.toJson = toJson;
    }

    name: string;
    data: T;
    editorComponent: (changeField: (data: T) => void)=>JSX.Element;
    toJson: (data: T, page: Page, book: Book, translationContext: TranslationContext) => any;
}

const pageFieldsForType: Record<string, (PageField<any>)[]> = {
    'patchouli:text': [
        new PageField<string>(
            "title",
            "",
            (changeField) => <LabelledTextInput label="Title:" onChange={c => changeField(c.target.value)} />,
            (data, page, book, translationContext) => {
                return translationContext.addTranslation("title", data)
            }
        ),
        new PageField<string>(
            "text",
            "",
            (changeField) => <LabelledTextInput label="Text:" onChange={c => changeField(c.target.value)} />,
            (data, page, book, translationContext) => {
                return translationContext.addTranslation("text", data)
            }
        ),
    ],
    'patchouli:image': [
        new PageField<string>(
            "title",
            "",
            (changeField) => <LabelledTextInput label="Title:" onChange={c => changeField(c.target.value)} />,
            (data, page, book, translationContext) => {
                return translationContext.addTranslation("title", data)
            }
        ),
        new PageField<string[]>(
            "images",
            [],
            (changeField) => <LabelledTextInput label="Images:" onChange={c => changeField(c.target.value.split(' '))} />,
            data => data
        ),
        new PageField<boolean>(
            "border",
            false,
            (changeField) => <label>Has Border:<input type="checkbox" onChange={c => changeField(c.target.checked)}/></label>,
            data => data
        ),
        new PageField<string>(
            "text",
            "",
            (changeField) => <LabelledTextInput label="Text:" onChange={c => changeField(c.target.value)} />,
            (data, page, book, translationContext) => {
                return translationContext.addTranslation("text", data)
            }
        )
    ]
}

export function setType(page: Page, type: string): Page {
    return {...page, type: type, customFields: Object.hasOwn(pageFieldsForType, type) ? pageFieldsForType[type] : [], toJson: page.toJson}
}

export function nextKey(pages: Page[]): number {
    return pages.length > 0 ? Math.max(...pages.map(p => p.key))+1 : 0
}