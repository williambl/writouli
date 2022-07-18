import {useState} from "react";
import {Entry} from "../lib/entry";
import {Page, setType} from "../lib/page";
import {replace} from "../lib/util";
import LabelledTextInput from "./LabelledTextInput";

export default function PageEditor(props: {page: Page, setPage: (Page) => void, removePage: (Page) => void}) {
    return (
        <fieldset>
            <button onClick={() => props.removePage(props.page)}>-</button>
            <br/>
            <LabelledTextInput label="Type:" defaultValue={props.page.type} onChange={change => props.setPage(setType(props.page, change.target.value))} />
            <br/>
            <LabelledTextInput label="Advancement:" defaultValue={props.page.advancement} onChange={change => props.setPage({...props.page, advancement: change.target.value})} />
            <br/>
            <LabelledTextInput label="Flag:" defaultValue={props.page.flag} onChange={change => props.setPage({ ...props.page, flag: change.target.value })} />
            <br/>
            <LabelledTextInput label="Anchor:" defaultValue={props.page.anchor} onChange={change => props.setPage({ ...props.page, anchor: change.target.value })} />
            <br/>
            <label>
                {props.page.customFields.map(field => <div key={field.name}>{field.editorComponent(newData => props.setPage({ ...props.page, customFields: replace(props.page.customFields, (f) => field.name === f.name, {...field, data: newData })}))}</div>)}
            </label>
        </fieldset>
    )
}