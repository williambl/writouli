import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import ToolbarPlugin from "./ToolbarPlugin";

export default function RichTextEditor(props: {onChange: (EditorState) => void}) {
    const theme = {}

    function onError(error) {
        console.error(error);
    }

    const initialConfig = {
        namespace: 'WritouliEditor',
        theme,
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
            />
            <OnChangePlugin onChange={props.onChange} />
            <HistoryPlugin />
            <ToolbarPlugin />
        </LexicalComposer>
    );
}