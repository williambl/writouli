import {ChangeEventHandler} from "react";

export default function LabelledTextInput(props: {label: string, defaultValue?: string, onChange: ChangeEventHandler<HTMLInputElement>}) {
    return (
        <label>
            {props.label}
            <input type="text" defaultValue={props.defaultValue} onChange={props.onChange}/>
        </label>
    )
}