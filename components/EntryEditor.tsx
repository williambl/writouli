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
                {entry.pages.map(page => <PageEditor key={page.key} page={page} setPage={newPage => setEntry({...entry, pages: entry.pages.map(e => e.key === newPage.key ? newPage : e)})} removePage={toDelete => {
                    setEntry({ ...entry, pages: entry.pages.filter(p => p.key !== toDelete.key) })
                }}/>)}
                <button onClick={() => {
                    setEntry({...entry, pages: [...entry.pages, {type: "", advancement: "", flag: "", anchor: "", key: entry.pages.length > 0 ? Math.max(...entry.pages.map(p => p.key))+1 : 0, customFields: []}]})
                }}>+</button>
            </label>
        </fieldset>
    )
}