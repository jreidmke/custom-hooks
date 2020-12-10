import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [showing, setshowing] = useState(true);
  // const setShowing = () => {
  //   setshowing(isUp => !isUp);
  // };
  const [showing, setShowing] = useFlip();
  return (
    <img
      src={showing ? front : back}
      alt="playing card"
      onClick={setShowing}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
