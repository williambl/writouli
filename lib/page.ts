import {string} from "prop-types";
import {Component} from "react";

export class Page {
    type: string;
    advancement: string | null;
    flag: string | null;
    anchor: string | null;

    customFields: PageField<any>[]
}

export abstract class PageField<T> {
    name: string;
    editorComponent: ()=>JSX.Element;
}