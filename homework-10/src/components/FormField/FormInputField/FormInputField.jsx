import React from "react";
import { Input } from "../../Input";

export const FormInputField = ({
    onChange: propsOnChange,
    ...rest
}) => {
    const onChange = (event) => {
        propsOnChange(event.target.value)
    }

    return (
        <Input
            {...rest}
            onChange={onChange}
        />
    )
}