import {useState} from "react";
import {Entry} from "../lib/entry";
import PageEditor from "./PageEditor";
import {nextKey, Page} from "../lib/page";
import {replace} from "../lib/util";

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
                {
                    entry.pages.map(page => <PageEditor
                        key={page.key}
                        page={page}
                        setPage={newPage => setEntry({...entry, pages: replace(entry.pages, e => e.key === newPage.key, newPage)})}
                        removePage={toDelete => setEntry({...entry, pages: entry.pages.filter(p => p.key !== toDelete.key)})}
                    />)
                }
                <button onClick={() => setEntry({...entry, pages: [...entry.pages, new Page(nextKey(entry.pages))]})}>+</button>
            </label>
        </fieldset>
    )
}