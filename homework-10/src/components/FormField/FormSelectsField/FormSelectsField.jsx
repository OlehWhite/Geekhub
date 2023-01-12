import React from "react";

import { Select } from "../Select/Select";
import {validGender} from "../../../helper/validate";

export const FormSelectsField = ({
    options,
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const onChange = (event) => {
        const { value } = event.target;
        onError(validGender(value, { required }))
        propsOnChange(value);
    }

    return(
        <Select
            options={options}
            onChange={onChange}
        />
    )
}