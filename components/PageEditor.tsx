import {useState} from "react";
import {Entry} from "../lib/entry";
import {Page, setType} from "../lib/page";

export default function PageEditor() {
    const [page, setPage] = useState<Page>(setType({
        type: "",
        advancement: "",
        anchor: "",
        flag: "",
        customFields: []
    }, ""));

    return (
        <fieldset>
            <label>
                Type:
                <input type="text" defaultValue={page.type} onChange={change => setPage(entry => setType(
                    entry,
                    change.target.value
                ))}/>
            </label>
            <br/>
            <label>
                Advancement:
                <input type="text" defaultValue={page.advancement} onChange={change => setPage(entry => {
                    return { ...entry, advancement: change.target.value }
                })}/>
            </label>
            <br/>
            <label>
                Flag:
                <input type="text" defaultValue={page.flag} onChange={change => setPage(entry => {
                    return { ...entry, flag: change.target.value }
                })}/>
            </label>
            <br/>
            <label>
                Anchor:
                <input type="text" defaultValue={page.anchor} onChange={change => setPage(entry => {
                    return { ...entry, anchor: change.target.value }
                })}/>
            </label>
            <br/>
            <label>
                {page.customFields.map(f => <div key={f.name}>{f.editorComponent(newData => setPage(page => {return {...page, customFields: [...page.customFields, {...f, 'data': newData }]}}))}</div>)}
            </label>
        </fieldset>
    )
}