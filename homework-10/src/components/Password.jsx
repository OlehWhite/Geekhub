import React from "react";
import { classNames } from './css'

export const Password = ({ values, className, ...rest }) => {

    return(
        <input
            style={{display: 'block'}}
            {...rest}
            className={classNames(className, 'Input')}
            type='text'
        />
    )
}