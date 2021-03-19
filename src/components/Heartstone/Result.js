import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import blizzApi from "../../blizzApiWrapper";
// import Button from "@material-ui/core/Button";
// import Card from "./Card";

import "./styles/Result.css";

function Result({ selectedClass }) {
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  const getHeartstoneCards = async () => {
    const data = await blizzApi.query("/hearthstone/cards");
    console.log(data);
  };
  useEffect(() => {
    //getHeartstoneCards()
  }, []);

  // useEffect(() => {
  //   if (cards.pageCount === 2 && cards.page === 2) {
  //     setPageNumber(1);
  //   }
  //   setLoad(true);
  //   const battleNetWrapper = require("battlenet-api-wrapper");
  //   const clientId = apiKey.clientId;
  //   const clientSecret = apiKey.clientSecret;

  //   async function fetch(pageNumber) {
  //     const bnw = new battleNetWrapper();
  //     await bnw.init(clientId, clientSecret);
  //     const data = await bnw.HearthstoneGameData.searchCards({
  //       class: `${selectedClass}`,
  //       page: pageNumber,
  //       pageSize: 999,
  //     });
  //     setCards(data);
  //     setLoad(false);
  //   }
  //   fetch(pageNumber);
  // }, [selectedClass, pageNumber]);

  return (
    <>
      <div className="result">
        <button onClick={() => getHeartstoneCards()}>KLIK</button>
        {/* {load ? (
          <div className="result__container__spinner">
            <CircularProgress />
          </div>
        ) : (
          <div className="result__container">
            {cards.cards?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
            {cards.pageCount > 1 ? (
              <Button
                className="result__button"
                onClick={() => setPageNumber(2)}
              >
                Next Page
              </Button>
            ) : null}
          </div>
        )} */}
      </div>
    </>
  );
}

export default Result;
