import React from "react";
import { Checkbox } from "../Checkbox";
import { useFormContext } from "../../Form";
import { REQUIRED } from "../../../helper/validate";

export const FormCheckboxes = ({
    options,
    name,
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const { values } = useFormContext()

    const onChange = (event) => {
        const value = event.target.value
        let arr = values[name] ? [...values[name]] : [];
        if (arr.includes(value)) {
            arr = arr.filter(item => item !== value)
        } else {
            arr.push(value)
        }
        propsOnChange(arr)
        onError(required && arr.length === 0 ? REQUIRED : null)
    };

    return options.map((option) => (
        <Checkbox
            {...rest}
            key={String(option.value)}
            name={name}
            value={option.value}
            label={option.label}
            onChange={onChange}
        />
    ))
}