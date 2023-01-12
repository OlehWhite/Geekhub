import React from "react";
import { classNames } from '../../helper/css'

export const Input = ({ className, ...rest }) => {
    return(
        <input
            {...rest}
            className={classNames(className, 'Input')}
        />
    )
}