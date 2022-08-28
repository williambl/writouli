import Category from "./category";
import JSZip from "jszip";
import {TranslationContext, Translations} from "./translations";
import {Book} from "./book";

export default async function createZip(book: Book, categories: Category[]): Promise<Blob> {
    const zip = new JSZip();
    const translations = new Translations();

    const bookId = book.id.split(":");
    const bookZip = zip.folder(`data/${bookId[0]}/patchouli_books/${bookId[1]}`);
    const bookTransContext = new TranslationContext(`book.${bookId[0]}.${bookId[1]}`, translations);
    bookZip.file("book.json", JSON.stringify(book.toJson(bookTransContext)))

    const catZip = bookZip.folder("en_us/categories")
    const entriesZip = bookZip.folder("en_us/entries")
    categories.forEach(category => {
        const catTransContext = bookTransContext.create(category.id);
        catZip.file(category.id, JSON.stringify(category.toJson(book, catTransContext)))

        category.entries.forEach(entry => {
            const entryTransContext = catTransContext.create(entry.id);
            entriesZip.file(entry.id, JSON.stringify(entry.toJson(category, book, entryTransContext)))
        })
    })

    const langZip = zip.folder(`assets/${bookId[0]}/lang/`);
    langZip.file("en_us.json", JSON.stringify(translations.translations))

    return await zip.generateAsync({type: "blob"});
}