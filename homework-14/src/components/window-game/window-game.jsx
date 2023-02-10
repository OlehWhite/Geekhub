import "./window-game.scss"
import {useEffect, useState} from "react";
import {getRandomIndex, getRandomNumberColor} from "../../utils/utils";

const hardLevel = Array.from(Array(280), (_, index) => index + 1);

export const WindowGame = () => {
    const [activeClass, setActiveClass] = useState("box-balloon");
    const [noActiveClass, setNoActiveClass] = useState("no-active");
    const [score, setScore] = useState(0);

    const setClickHandler = (e) => {
        let target = e.target;
        if (target.className === activeClass) {
            target.className = noActiveClass
            target.style.background = `rgba(255, 255, 255, 0)`;
            setScore(prevState => prevState + 1)
        }
    }

    const createdBalloons = (index) => {
        let target = document.querySelector(`.no-active[data-index="${index}"]`)
        if (target === null) return
        if (target.dataset.index === index) {
            target.className = activeClass
            target.style.background = `rgb(
                ${getRandomNumberColor()}, 
                ${getRandomNumberColor()}, 
                ${getRandomNumberColor()}, 
                .6)`
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            createdBalloons(getRandomIndex().toString())
            console.log(2)
        }, 1000)
    }, [])

    return (
        <>
            <div className="score">Score: {score}</div>
            <div
                className="window-game"
                onClick={(e) => setClickHandler(e)}
            >
                {hardLevel.map((_, index) =>
                    <div
                        data-index={index}
                        key={index}
                        className={noActiveClass}>
                    </div>
                )}
            </div>
        </>
    )
}