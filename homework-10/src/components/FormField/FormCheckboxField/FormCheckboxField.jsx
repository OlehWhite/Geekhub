import React, { useId, useState } from "react";
import { validGenderAndCheckboxAgree } from "../../../helper/validate";

export const FormCheckboxField = ({
    onChange: propsOnChange,
    onError,
    label,
    required,
    ...rest
}) => {
    const [checked, setChecked] = useState(true)
    const id = useId();

    const onChange = () => {
        onError(validGenderAndCheckboxAgree(checked, { required }))
        propsOnChange(checked)
        setChecked(!checked)
    }

    return (
        <input
            style={{width: '20px', display: 'inline-block'}}
            {...rest}
            id={id}
            type='checkbox'
            onChange={onChange}
            aria-describedby={`${onError}Error`}
        />
    );
};