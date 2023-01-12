import React, {useId} from "react";

import { useFormContext } from "../Form/Form";

import { FormFirstNameAndLastField } from './FormFirstNameAndLastNameField/FormFirstNameAndLastField'
import {FormConfirmPasswordField} from "./FormConfirmPasswordField/FormConfirmPasswordField";
import { FormPasswordField } from "./FormPasswordField/FormPasswordField";
import { FormEmailField } from './FormEmailField/FormEmailField';
import { FormPhoneField } from "./FormPhoneField/FormPhoneField";
import { FormInput } from "./FormInput/FormInput";

import './style.css'
import {FormCheckboxes} from "./FormCheckboxes/FormCheckboxes";
import {FormSelectsField} from "./FormSelectsField/FormSelectsField";

export const FormField = ({
    type = 'text',
    id: propsId,
    label,
    name,
    required,
    ...rest
}) => {
    const innerId = useId();
    const id = propsId || `FormField${innerId}`;

    const { isSubmitting, setValue, setError, errors } = useFormContext();

    const onChange = (value) => {
        setValue(name, value);
    }

    const onError = (errorMessage) => {
        setError(name, errorMessage);
    }

    const error = errors[name];

    let Component;
    switch (type) {
        case 'name':
            Component = FormFirstNameAndLastField;
            break;
        case 'lastName':
            Component = FormFirstNameAndLastField;
            break;
        case 'email':
            Component = FormEmailField;
            break;
        case 'phone':
            Component = FormPhoneField;
            break;
        case 'select':
            Component = FormSelectsField;
            break;
        case 'checkboxes':
            Component = FormCheckboxes;
            break;
        case 'password':
            Component = FormPasswordField;
            break;
        case 'confirmPassword':
            Component = FormConfirmPasswordField;
            break;
        default:
            Component = FormInput;
            break;
    }

    return (
        <div
            className='form-wrapper'
        >
            {type !== 'checkboxes' && (
                <label
                    htmlFor={getInputId(id)}
                    className='label-item'
                >
                    {label}
                </label>
            )}
            <Component
                className='input-item'
                {...rest}
                id={type === 'checkboxes' ? undefined : getInputId(id)}
                label={type === 'checkboxes' ? undefined : label}
                type={type}
                name={name}
                onChange={onChange}
                onError={onError}
                disabled={isSubmitting}
                aria-describedby={getErrorId(innerId)}
                required={required}
            />
            {error && (
                <span
                    id={getErrorId(innerId)}
                    style={{color: 'red', display: 'block'}}
                >
                    {error}
                </span>
            )}
        </div>
    )
}

function getErrorId(id) {
    return `${id}Error`;
}
function getInputId(id) {
    return `${id}Input`;
}