import {useState} from "react";
import {Entry} from "../lib/entry";

export default function EntryEditor() {
    const [entry, setEntry] = useState<Entry>({category: "", icon: "", name: "", pages: []});

    return (
        <fieldset>
            <label>
                Name:
                <input type="text" defaultValue={entry.name} onChange={change => setEntry(entry => Object.assign(
                    entry,
                    {'name': change.target.value}
                ))}/>
            </label>
            <br/>
            <label>
                Category:
                <input type="text" defaultValue={entry.category} onChange={change => setEntry(entry => Object.assign(
                    entry,
                    {'category': change.target.value}
                ))}/>
            </label>
            <br/>
            <label>
                Icon:
                <input type="text" defaultValue={entry.icon} onChange={change => setEntry(entry => Object.assign(
                    entry,
                    {'icon': change.target.value}
                ))}/>
            </label>
            <br/>
            <label>
                Pages:
                <div>TODO</div>
            </label>
        </fieldset>
    )
}