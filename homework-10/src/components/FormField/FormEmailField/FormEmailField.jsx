import React from "react";
import { validateEmail } from "../../../helper/validate";
import { Input } from "../../Input";

export const FormEmailField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validateEmail(value, { required }))
        propsOnChange(value)
    }

    return (
        <Input
            {...rest}
            onChange={onChange}
            required={required}
        />
    )
}
