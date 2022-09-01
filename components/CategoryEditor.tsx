import {Entry} from "../lib/entry";
import {create, randomId, replace} from "../lib/util";
import {LabelledBooleanInput, LabelledTextArea, LabelledTextInput} from "./LabelledInputs";
import Category from "../lib/category";
import EntryEditor from "./EntryEditor";
import {inspect} from "util";
import styles from "../styles/Home.module.css"

export default function CategoryEditor(props: {category: Category, setCategory: (category: Category) => void, removeCategory: (category: Category) => void}) {

    return (
        <fieldset>
            <button onClick={() => props.removeCategory(props.category)}>-</button>
            <LabelledTextInput label="ID:" defaultValue={props.category.id} onChange={change => props.setCategory(create(props.category, {id: change.target.value}))} />
            <LabelledTextInput label="Name:" defaultValue={props.category.name} onChange={change => props.setCategory(create(props.category, {name: change.target.value}))} />
            <LabelledTextArea label="Description:" defaultValue={props.category.description} onChange={change => props.setCategory(create(props.category, {description: change.target.value}))} />
            <LabelledTextInput label="Icon:" defaultValue={props.category.icon} onChange={change => props.setCategory(create(props.category, {icon: change.target.value}))}/>
            <LabelledTextInput label="Parent:" defaultValue={props.category.parent} onChange={change => props.setCategory(create(props.category, {parent: change.target.value}))} />
            <LabelledTextInput label="Flag:" defaultValue={props.category.flag} onChange={change => props.setCategory(create(props.category, {flag: change.target.value}))} />
            <LabelledBooleanInput label="Is Secret:" defaultValue={props.category.secret} onChange={change => props.setCategory(create(props.category, {secret: change.target.value}))} />
            <label className={styles.vertical_content}>
                Entries:
                <div>
                    {
                        props.category.entries.map(entry => <EntryEditor
                            key={entry.key}
                            entry={entry}
                            setEntry={newEntry => props.setCategory(create(props.category, {entries: replace(props.category.entries, e => e.key === newEntry.key, newEntry)}))}
                            removeEntry={toDelete => props.setCategory(create(props.category, {entries: props.category.entries.filter(p => p.key !== toDelete.key)}))}
                        />)
                    }
                    <button onClick={() => props.setCategory(create(props.category, {entries: [...props.category.entries, new Entry(randomId().replace(':', '.'), "", "", [])]}))}>+</button>
                </div>
            </label>
        </fieldset>
    )
}