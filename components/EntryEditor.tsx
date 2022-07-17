import {useState} from "react";
import {Entry} from "../lib/entry";
import PageEditor from "./PageEditor";

export default function EntryEditor() {
    const [entry, setEntry] = useState<Entry>({category: "", icon: "", name: "", pages: []});

    return (
        <fieldset>
            <label>
                Name:
                <input type="text" defaultValue={entry.name} onChange={change => setEntry(entry => {return {...entry, name: change.target.value}})}/>
            </label>
            <br/>
            <label>
                Category:
                <input type="text" defaultValue={entry.category} onChange={change => setEntry(entry => {return {...entry, category: change.target.value}})}/>
            </label>
            <br/>
            <label>
                Icon:
                <input type="text" defaultValue={entry.icon} onChange={change => setEntry(entry => {return {...entry, icon: change.target.value}})}/>
            </label>
            <br/>
            <label>
                Pages:
                <PageEditor />
            </label>
        </fieldset>
    )
}