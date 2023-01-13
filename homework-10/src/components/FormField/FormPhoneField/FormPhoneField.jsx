import React from "react";
import { validatePhoneNumber } from "../../../helper/validate";
import { Input } from "../../Input";

export const FormPhoneField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validatePhoneNumber(value, { required }))
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
