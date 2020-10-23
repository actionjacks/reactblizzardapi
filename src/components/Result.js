import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import apiKey from "../apiKey";
import Card from "./Card";
import "../styles/Result.css";

function Result({ selectedClass }) {
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoad(true);
    const battleNetWrapper = require("battlenet-api-wrapper");
    const clientId = apiKey.clientId;
    const clientSecret = apiKey.clientSecret;

    async function fetch(pageNumber) {
      const bnw = new battleNetWrapper();
      await bnw.init(clientId, clientSecret);
      const data = await bnw.HearthstoneGameData.searchCards({
        class: `${selectedClass}`,
        page: pageNumber,
        pageSize: 999,
      });
      // console.log(data.pageCount);
      if (data.pageCount > 1) {
        setPageNumber(2);
      } else {
        setPageNumber(1);
      }
      setCards(data);
      setLoad(false);
    }
    fetch(pageNumber);
  }, [selectedClass, pageNumber]);

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
            {}
          </div>
        )}
      </div>
    </>
  );
}

export default Result;
