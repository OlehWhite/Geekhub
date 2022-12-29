import React from "react";
import { classNames } from './css'

export const Input = ({ className, ...rest }) => {
    return(
        <input
            {...rest}
            className={classNames(className, 'Input')}
        />
    )
}