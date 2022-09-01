import Head from 'next/head'
import Image from 'next/image'
import { saveAs } from 'file-saver';
import styles from '../styles/Home.module.css'
import EntryEditor from "../components/EntryEditor";
import CategoryEditor from "../components/CategoryEditor";
import {useState} from "react";
import {Book} from "../lib/book";
import BookEditor from "../components/BookEditor";
import createZip from "../lib/saving";
import EditorSettings, { EditorSettingsContext } from '../lib/editor_context';

export default function Home() {

    const [book, setBook] = useState<Book>(new Book());
    const [editorSettings, setEditorSettings] = useState<EditorSettings>({shouldShowAdvanced: true, setSettings: () => {}})

    return (
        <div className={styles.container}>
            <Head>
                <title>Writouli</title>
                <meta name="description" content="Patchouli Editor" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <EditorSettingsContext.Provider value={{...editorSettings, setSettings: setEditorSettings}}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Writouli
                </h1>

                <BookEditor book={book} setBook={setBook}/>

                <button onClick={e => {
                    setEditorSettings({...editorSettings, shouldShowAdvanced: !editorSettings.shouldShowAdvanced})
                }}>{editorSettings.shouldShowAdvanced ? "Hide" : "Show"} Advanced</button>
                <button onClick={async () => {
                    saveAs(await createZip(book), "file.zip")
                }}>Download ZIP</button>

            </main>
            </EditorSettingsContext.Provider>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
