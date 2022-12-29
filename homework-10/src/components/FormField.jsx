import React, { useId } from "react";
import { ConfirmPassword } from './ConfirmPassword'
import { Password } from './Password'
import { Input } from './Input'

export const FormField = ({
      type = 'text',
      id: propsId,
      label,
      ...rest
  }) => {
    const innerId = useId();
    const id = propsId || `FormField${innerId}`

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
            <label htmlFor={id}>{label}</label>
            <Component
                {...rest}
                id={id}
                type={type}
            />
        </div>
    )
}