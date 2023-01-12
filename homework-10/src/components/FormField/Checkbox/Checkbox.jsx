import React, { useId } from "react";

import './style.css'

export const Checkbox = ({
    label,
    ...rest
}) => {
    const id = useId();

    return (
        <div className='item-wrapper'>
            <input
                style={{width: '20px'}}
                {...rest}
                id={id}
                type='checkbox'
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};