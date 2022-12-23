import React from "react";
import './palette.css';

export const AverageColor = ({ rgbColor }) => {
    return (
        <div className='averageColor'>
            The average color is: rbg({rgbColor.red}, {rgbColor.green}, {rgbColor.blue})
        </div>
    )
}
