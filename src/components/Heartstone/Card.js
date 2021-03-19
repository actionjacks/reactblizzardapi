import React, { forwardRef } from "react";
import "./styles/Card.css";

const Card = forwardRef(({ card }, ref) => {
  return (
    <>
      <img ref={ref} src={card.image} className="card__image" />
    </>
  );
});

export default Card;
