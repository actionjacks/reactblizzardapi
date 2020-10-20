import React, { useState, useEffect } from "react";
import apiKey from "../apiKey";
import Card from "./Card";
import "../styles/Result.css";
import FlipMove from "react-flip-move";

function Result({ selectedClass }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const battleNetWrapper = require("battlenet-api-wrapper");
    const clientId = apiKey.clientId;
    const clientSecret = apiKey.clientSecret;

    async function fetch() {
      const bnw = new battleNetWrapper();
      await bnw.init(clientId, clientSecret);
      const data = await bnw.HearthstoneGameData.searchCards({
        class: `${selectedClass}`,
        // page: 1,
        pageSize: 999,
      });
      // console.log(data);
      // console.log(battleNetWrapper);
      setCards(data);
      console.log(cards.cards);
    }
    fetch();
  }, [selectedClass]);

  return (
    <>
      <div className="result">
        <FlipMove className="result__container">
          {cards.cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default Result;
