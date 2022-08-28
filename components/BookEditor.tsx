import {Entry} from "../lib/entry";
import {create, randomId, replace} from "../lib/util";
import LabelledTextInput from "./LabelledTextInput";
import Category from "../lib/category";
import EntryEditor from "./EntryEditor";
import {Book} from "../lib/book";
import CategoryEditor from "./CategoryEditor";

export default function BookEditor(props: {book: Book, setBook: (book: Book) => void}) {

    return (
        <fieldset>
            <LabelledTextInput label="ID:" defaultValue={props.book.id} onChange={change => props.setBook(create(props.book, {id: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Name:" defaultValue={props.book.name} onChange={change => props.setBook(create(props.book, {name: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Landing Text:" defaultValue={props.book.landingText} onChange={change => props.setBook(create(props.book, {landingText: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Book Texture:" defaultValue={props.book.bookTexture} onChange={change => props.setBook(create(props.book, {bookTexture: change.target.value}))}/>
            <br/>
            <LabelledTextInput label="Filler Texture:" defaultValue={props.book.fillerTexture} onChange={change => props.setBook(create(props.book, {fillerTexture: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Crafting Texture:" defaultValue={props.book.craftingTexture} onChange={change => props.setBook(create(props.book, {craftingTexture: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Model:" defaultValue={props.book.model} onChange={change => props.setBook(create(props.book, {model: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Version:" defaultValue={props.book.version} onChange={change => props.setBook(create(props.book, {version: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Subtitle:" defaultValue={props.book.subtitle} onChange={change => props.setBook(create(props.book, {subtitle: change.target.value}))} />
            <br/>
            <LabelledTextInput label="Creative Tab:" defaultValue={props.book.creativeTab} onChange={change => props.setBook(create(props.book, {creativeTab: change.target.value}))} />
            <br/>
            <label>Is Pamphlet:<input type="checkbox" defaultChecked={props.book.pamphlet} onChange={change => props.setBook(create(props.book, {pamphlet: change.target.value}))} /></label>
            <br/>
            <label>
                Categories:
                {
                    props.book.categories.map(categories => <CategoryEditor
                        key={categories.key}
                        category={categories}
                        setCategory={newCategory => props.setBook(create(props.book, {categories: replace(props.book.categories, e => e.key === newCategory.key, newCategory)}))}
                        removeCategory={toDelete => props.setBook(create(props.book, {categories: props.book.categories.filter(p => p.key !== toDelete.key)}))}
                    />)
                }
                <button onClick={() => props.setBook(create(props.book, {categories: [...props.book.categories, new Category(randomId(), "", "", "", "", "", false, [])]}))}>+</button>
            </label>
        </fieldset>
    )
}