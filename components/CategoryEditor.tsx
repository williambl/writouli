import {Entry} from "../lib/entry";
import {create, randomId, replace} from "../lib/util";
import LabelledTextInput from "./LabelledTextInput";
import Category from "../lib/category";
import EntryEditor from "./EntryEditor";

export default function CategoryEditor(props: {category: Category, setCategory: (category: Category) => void, removeCategory: (category: Category) => void}) {

    return (
        <fieldset>
            <button onClick={() => props.removeCategory(props.category)}>-</button>
            <br/>
            <LabelledTextInput label="ID:" defaultValue={props.category.id} onChange={change => props.setCategory(create(props.category, {id: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Name:" defaultValue={props.category.name} onChange={change => props.setCategory(create(props.category, {name: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Description:" defaultValue={props.category.description} onChange={change => props.setCategory(create(props.category, {description: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Icon:" defaultValue={props.category.icon} onChange={change => props.setCategory(create(props.category, {icon: change.target.value}))}/>
            <br/>
            <LabelledTextInput label="Parent:" defaultValue={props.category.parent} onChange={change => props.setCategory(create(props.category, {parent: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Flag:" defaultValue={props.category.flag} onChange={change => props.setCategory(create(props.category, {flag: change.target.value}))} />
            <br/>
            <label>Is Secret:<input type="checkbox" defaultChecked={props.category.secret} onChange={change => props.setCategory(create(props.category, {secret: change.target.value}))} /></label>
            <br/>
            <label>
                Entries:
                {
                    props.category.entries.map(entry => <EntryEditor
                        key={entry.key}
                        entry={entry}
                        setEntry={newEntry => props.setCategory(create(props.category, {entries: replace(props.category.entries, e => e.key === newEntry.key, newEntry)}))}
                        removeEntry={toDelete => props.setCategory(create(props.category, {entries: props.category.entries.filter(p => p.key !== toDelete.key)}))}
                    />)
                }
                <button onClick={() => props.setCategory(create(props.category, {entries: [...props.category.entries, new Entry(randomId(), "", "", [])]}))}>+</button>
            </label>
        </fieldset>
    )
}