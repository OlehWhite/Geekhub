import React, {useContext, useId, useState} from "react";
import { ConfirmPassword } from './ConfirmPassword'
import { Password } from './Password'
import { Input } from './Input'
import { FormContext } from "./Form";

export const FormField = ({
      type = 'text',
      label,
      ...rest
  }) => {
    const { isSubmitting } = useContext(FormContext)

    let Component;
    switch (type) {
        case 'password':
            Component = Password;
            break;
        case 'confirmPassword':
            Component = ConfirmPassword;
            break;
        default:
            Component = Input;
            break;
    }

    return (
        <div>
            <label>{label}</label>
            <Component
                {...rest}
                type={type}
                disabled={isSubmitting}
            />
        </div>
    )
}