import { useEffect, useState } from "react";
import {getRandomNumber, getUniqueWithCounter} from "../../utils/utils";

import "./WindowGame.scss";

export const WindowGame = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);

  const setClickHandler = (e) => {
    let target = e.target;
    if (target.dataset.index) {
      document
        .querySelector(`.balloon[data-index="${target.dataset.index}"]`)
        .remove();
      setScore((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon = {
        id: getUniqueWithCounter(),
        top: `${getRandomNumber(95)}%`,
        left: `${getRandomNumber(97)}%`,
        backgroundColor: `rgb(
          ${getRandomNumber(256)}, 
          ${getRandomNumber(256)}, 
          ${getRandomNumber(256)}, 
          .7)`,
      };

      setBalloons([...balloons, newBalloon]);
    }, 500);

    return () => clearInterval(interval);
  }, [balloons]);

  return (
    <>
      <div className="score">Score: {score}</div>
      <div className="window-game" onClick={(e) => setClickHandler(e)}>
        {balloons.map((balloonStyle, index) => (
          <div
            key={balloonStyle.id}
            data-index={index}
            className="balloon"
            style={balloonStyle}
          ></div>
        ))}
      </div>
    </>
  );
};

