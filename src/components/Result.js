import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import apiKey from "../apiKey";
import Card from "./Card";
import "../styles/Result.css";

function Result({ selectedClass }) {
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(null);

  useEffect(() => {
    setLoad(true);
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
      setLoad(false);
    }
    fetch();
  }, [selectedClass]);

  return (
    <>
      <div className="result">
        {load ? (
          <div className="result__container__spinner">
            <CircularProgress />
          </div>
        ) : (
          <div className="result__container">
            {cards.cards?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Result;
