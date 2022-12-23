import React from "react";
import './palette.css';

export const Background = ({change, backgroundColor}) => {
    return (
        <div
            className='background'
            onClick={change}
            style={{ background: backgroundColor }}
        >
        </div>
    )
}