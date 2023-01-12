import React, { useId } from "react";

import './style.css'

export const Select = ({
     label,
     options,
     ...rest
 }) => {
    const id = useId();
    return (
        <div>
            <select
                className='select-item'
                {...rest}
                id={id}
            >
            {options.map((option) => (
                <option
                    value={option.value}
                    key={String(option.value)}
                >
                    {option.label}
                </option>
            ))}
            </select>
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
};