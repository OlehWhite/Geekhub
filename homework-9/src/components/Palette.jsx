import React, {useEffect, useState} from "react";
import './palette.css';
import { AverageColor } from './AverageColor';
import { Background } from './Background';
import { DominatorColor } from './DominatorColor';

const rgbColors = {
    red: 127,
    green: 127,
    blue: 127,
}

const getRandomNumber = () => Math.floor(Math.random() * 256)
const getObjValue = (obj) => Object.values(obj)

export const Palette = () => {
    const [count, setCount] = useState(1)
    const [rgbColor, setRgrColor] = useState(rgbColors)
    const [averageColor, setAverageColor] = useState(rgbColor)
    let [dominatorColor, setDominatorColor] = useState('All colors are equal')

    const changeCount = () => {
        setCount(prevState => prevState + 1)
    }

    const backgroundColor = `rgb(${getObjValue(rgbColor)})`

    useEffect(() => {
        if (count > 1) {
            setRgrColor((prev) => {
                return {
                    ...prev,
                    red: prev.red = getRandomNumber(),
                    green:  prev.green = getRandomNumber(),
                    blue:  prev.blue = getRandomNumber(),
                }
            })
        }
    }, [count])

    useEffect(() => {
        setAverageColor((prev) => {
            return {
                ...prev,
                red: Math.round((prev.red + rgbColor.red) / count),
                green:  Math.round((prev.green + rgbColor.green) / count),
                blue:  Math.round((prev.blue + rgbColor.blue) / count),
            }
        })
    }, [count, rgbColor])

    useEffect(() => {
            if (rgbColor.red > (rgbColor.green + rgbColor.blue) / 2) {
                setDominatorColor(dominatorColor = 'red')
            } else if (rgbColor.green > (rgbColor.red + rgbColor.blue) / 2) {
                setDominatorColor(dominatorColor = 'green')
            } else if (rgbColor.blue > (rgbColor.red + rgbColor.green) / 2) {
                setDominatorColor(dominatorColor = 'blue')
            } else {
                setDominatorColor(dominatorColor = 'All colors are equal')
            }
    }, [count])

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
