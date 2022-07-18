import {string} from "prop-types";
import {Component} from "react";
import LabelledTextInput from "../components/LabelledTextInput";
import RichTextEditor from "../components/RichTextEditor";
import {EditorState} from "lexical";

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
}

export class PageField<T> {
    constructor(name: string, data: T, editorComponent: (changeField: (T) => void) => JSX.Element) {
        this.name = name;
        this.data = data;
        this.editorComponent = editorComponent;
    }

    name: string;
    data: T;
    editorComponent: (changeField: (T) => void)=>JSX.Element;
}

const pageFieldsForType: Record<string, (PageField<any>)[]> = {
    'patchouli:text': [
        new PageField<string>(
            "title",
            "",
            (changeField) => <LabelledTextInput label="Title:" onChange={c => changeField(c.target.value)} />
        ),
        new PageField<EditorState>(
            "text",
            null,
            (changeField) => <RichTextEditor onChange={c => changeField(c)} />
        ),
    ],
    'patchouli:image': [
        new PageField<string>(
            "title",
            "",
            (changeField) => <LabelledTextInput label="Title:" onChange={c => changeField(c.target.value)} />
        ),
        new PageField(
            "images",
            [],
            (changeField) => <LabelledTextInput label="Images:" onChange={c => changeField(c.target.value)} />
        ),
        new PageField(
            "border",
            false,
            (changeField) => <label>Has Border:<input type="checkbox" onChange={c => changeField(c.target.checked)}/></label>
        ),
        new PageField(
            "text",
            "",
            (changeField) => <LabelledTextInput label="Text:" onChange={c => changeField(c.target.value)} />
        )
    ]
}

export function setType(page: Page, type: string): Page {
    return {...page, type: type, customFields: Object.hasOwn(pageFieldsForType, type) ? pageFieldsForType[type] : []}
}

export function nextKey(pages: Page[]): number {
    return pages.length > 0 ? Math.max(...pages.map(p => p.key))+1 : 0
}