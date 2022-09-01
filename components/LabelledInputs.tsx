import {ChangeEventHandler} from "react";

export function LabelledTextInput(props: {label: string, defaultValue?: string, onChange: ChangeEventHandler<HTMLInputElement>}) {
    return (
        <label>
            {props.label}
            <input type="text" defaultValue={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
}

export function LabelledTextArea(props: {label: string, defaultValue?: string, onChange: ChangeEventHandler<HTMLTextAreaElement>}) {
    return (
        <label>
            {props.label}
            <textarea rows={3} cols={35} defaultValue={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
}

export function LabelledBooleanInput(props: {label: string, defaultValue?: boolean, onChange: ChangeEventHandler<HTMLInputElement>}) {
    return (
        <label>
            {props.label}
            <input type="checkbox" defaultChecked={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
}