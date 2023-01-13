import React from "react";

import { Select } from "../Select";
import { validGenderAndCheckboxAgree } from "../../../helper/validate";

export const FormSelectsField = ({
    options,
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validGenderAndCheckboxAgree(value, { required }))
        propsOnChange(value);
    }

    return(
        <Select
            options={options}
            onChange={onChange}
        />
    )
}