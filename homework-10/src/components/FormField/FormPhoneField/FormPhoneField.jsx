import React from "react";
import { validPhoneNumber } from "../../../helper/validate";
import { Input } from "../../Input/Input";

export const FormPhoneField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validPhoneNumber(value, { required }))
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
