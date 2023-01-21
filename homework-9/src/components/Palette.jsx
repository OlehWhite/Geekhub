import React, { useEffect, useState } from "react";

import { AverageColor } from './AverageColor';
import { Background } from './Background';
import { DominatorColor } from './DominatorColor';

import { getRandomNumber } from "../utilits";
import { getObjValue } from "../utilits";

import './palette.css';

const rgbColors = {
    red: 127,
    green: 127,
    blue: 127,
}

export const Palette = () => {
    const [count, setCount] = useState(0)
    const [rgbColor, setRgrColor] = useState(rgbColors)
    const [averageColor, setAverageColor] = useState(rgbColor)
    const [colorList, setColorList] = useState([rgbColor])
    const [dominatorColor, setDominatorColor] = useState('All colors are equal')

    const changeCount = () => {
        const newColor = {
            red: getRandomNumber(),
            green: getRandomNumber(),
            blue: getRandomNumber(),
        }

        setCount(prevState => prevState + 1)
        setRgrColor(newColor)
        setColorList(prevState => [...prevState, newColor])
    }

    const backgroundColor = `rgb(${getObjValue(rgbColor)})`

    useEffect(() => {
        const averageColorSum = {red: 0, green: 0, blue: 0}

        colorList.forEach(({ red, green, blue}) => {
            averageColorSum.red += red
            averageColorSum.green += green
            averageColorSum.blue += blue
        })

        const {red, green, blue} = averageColorSum

        if (count > 1) {
            setAverageColor(({
                red: Math.round(red / count),
                green:  Math.round(green / count),
                blue:  Math.round(blue / count),
            }))
        }
        console.log(red, count, Math.round(red / count))
    }, [colorList, count])

    useEffect(() => {
        if (rgbColor.red > (rgbColor.green + rgbColor.blue) / 2) {
            setDominatorColor('red')
        } else if (rgbColor.green > (rgbColor.red + rgbColor.blue) / 2) {
            setDominatorColor('green')
        } else if (rgbColor.blue > (rgbColor.red + rgbColor.green) / 2) {
            setDominatorColor('blue')
        } else {
            setDominatorColor('All colors are equal')
        }
    }, [rgbColor])

    return (
        <>
            <AverageColor
                rgbColor={rgbColor}
            />
            <Background
                change={changeCount}
                count={count}
                backgroundColor={backgroundColor}
            />
            <DominatorColor
                dominatorColor={dominatorColor}
            />
        </>
    )
}