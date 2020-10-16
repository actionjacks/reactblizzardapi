import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Result.css";
import FlipMove from "react-flip-move";
import axios from "../axios";

function Result({ selectedClass }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedClass);
      console.log(request); // <--------------------------testing
      setCards(request.data.cards);
      return request;
    }
    fetchData();
  }, [selectedClass]);

  return (
    <>
      <div className="result">
        <FlipMove className="result__container">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default Result;
