import {ChangeEventHandler} from "react";
import { EditorSettingsContext } from "../lib/editor_context";

export function LabelledTextInput(props: {label: string, defaultValue?: string, isAdvanced?: boolean, onChange: ChangeEventHandler<HTMLInputElement>}) {
    const input = (
        <label>
            {props.label}
            <input type="text" defaultValue={props.defaultValue} onChange={props.onChange}/>
        </label>
    )

    return props.isAdvanced ? <EditorSettingsContext.Consumer>{settings => settings.shouldShowAdvanced ? input : null}</EditorSettingsContext.Consumer> : input;
}

export function LabelledTextArea(props: {label: string, defaultValue?: string, isAdvanced?: boolean, onChange: ChangeEventHandler<HTMLTextAreaElement>}) {
    const input = (
        <label>
            {props.label}
            <textarea rows={3} cols={35} defaultValue={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
    return props.isAdvanced ? <EditorSettingsContext.Consumer>{settings => settings.shouldShowAdvanced ? input : null}</EditorSettingsContext.Consumer> : input;
}

export function LabelledBooleanInput(props: {label: string, defaultValue?: boolean, isAdvanced?: boolean, onChange: ChangeEventHandler<HTMLInputElement>}) {
    const input = (
        <label>
            {props.label}
            <input type="checkbox" defaultChecked={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
    return props.isAdvanced ? <EditorSettingsContext.Consumer>{settings => settings.shouldShowAdvanced ? input : null}</EditorSettingsContext.Consumer> : input;
}