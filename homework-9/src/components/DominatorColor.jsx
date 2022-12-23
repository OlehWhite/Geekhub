import React from "react";
import './palette.css';

export const DominatorColor = (props) => {
    return (
        <div className='dominatorColor'>
            Dominant color: {props.dominatorColor}
        </div>
    )
}
