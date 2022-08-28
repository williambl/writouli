import {Entry} from "../lib/entry";
import PageEditor from "./PageEditor";
import {nextKey, Page} from "../lib/page";
import {replace} from "../lib/util";
import LabelledTextInput from "./LabelledTextInput";

export default function EntryEditor(props: {entry: Entry, setEntry: (Entry) => void, removeEntry: (Entry) => void}) {

    return (
        <fieldset>
            <button onClick={() => props.removeEntry(props.entry)}>-</button>
            <br/>
            <LabelledTextInput label="ID:" defaultValue={props.entry.id} onChange={change => props.setEntry({...props.entry, id: change.target.value})} />
            <br/>
            <LabelledTextInput label="Name:" defaultValue={props.entry.name} onChange={change => props.setEntry({...props.entry, name: change.target.value})} />
            <br/>
            <LabelledTextInput label="Icon:" defaultValue={props.entry.icon} onChange={change => props.setEntry({...props.entry, icon: change.target.value})}/>
            <br/>
            <label>
                Pages:
                {
                    props.entry.pages.map(page => <PageEditor
                        key={page.key}
                        page={page}
                        setPage={newPage => props.setEntry({...props.entry, pages: replace(props.entry.pages, e => e.key === newPage.key, newPage)})}
                        removePage={toDelete => props.setEntry({...props.entry, pages: props.entry.pages.filter(p => p.key !== toDelete.key)})}
                    />)
                }
                <button onClick={() => props.setEntry({...props.entry, pages: [...props.entry.pages, new Page(nextKey(props.entry.pages))]})}>+</button>
            </label>
        </fieldset>
    )
}