import React from "react";
import { validateName } from "../../../helper/validate";
import { Input } from "../../Input";

export const FormFirstName = ({
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validateName(value, { required }))
        propsOnChange(value)
    }

    return (
        <Input
            {...rest}
            onChange={onChange}
            required={required}
            aria-describedby={`${onError}Error`}
        />
    )
}
