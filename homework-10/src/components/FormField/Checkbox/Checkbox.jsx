import React, { useId } from "react";

import './style.css'

export const Checkbox = ({
    label,
    type,
    ...rest
}) => {
    const id = useId();

    return (
        <div className='item-wrapper'>
            <input
                style={{width: '20px'}}
                {...rest}
                id={id}
                type={type === 'checkboxes' ? 'checkbox' : 'radio'}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};