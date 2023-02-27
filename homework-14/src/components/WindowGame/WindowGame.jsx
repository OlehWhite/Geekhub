import { useEffect, useState } from "react";
import {
  getRandomBalloonLeft,
  getRandomBalloonTop,
  getRandomNumberColor,
} from "../../utils";

import "./WindowGame.scss";

export const WindowGame = () => {
  const [balloon, setBalloon] = useState([]);
  const [score, setScore] = useState(0);

  const setClickHandler = (e) => {
    let target = e.target;
    if (target.dataset.index) {
      document.querySelector(
        `.balloon[data-index="${target.dataset.index}"]`
      ).outerHTML = "";
      setScore(prevState => prevState + 1)
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {

      const newBalloon = {
        top: `${getRandomBalloonTop()}%`,
        left: `${getRandomBalloonLeft()}%`,
        backgroundColor: `rgb(
          ${getRandomNumberColor()}, 
          ${getRandomNumberColor()}, 
          ${getRandomNumberColor()}, 
          .7)`,
      };

      setBalloon([...balloon, newBalloon]);
    }, 500);

    return () => clearInterval(interval);
  }, [balloon]);

  return (
    <>
      <div className="score">Score: {score}</div>
      <div className="window-game" onClick={(e) => setClickHandler(e)}>
        {balloon.map((_, index) => (
          <div
            data-index={index}
            key={index}
            className="balloon"
            style={{
              top: _.top,
              left: _.left,
              backgroundColor: _.backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
