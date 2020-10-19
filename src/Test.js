import React, { useState, useEffect } from "react";
// import axios from "axios";
// const BlizzAPI = require("blizzapi");

function Test() {
  useEffect(() => {
    const battleNetWrapper = require("battlenet-api-wrapper");
    const clientId = "e4b0c1cf4f14416cb1f68a417f53e6cc";
    const clientSecret = "DtLcZEraCXzSmEoTU7GC8oLJZs4QPB1O";

    async function fetch() {
      const bnw = new battleNetWrapper();
      await bnw.init(clientId, clientSecret);
      const data = await bnw.HearthstoneGameData.searchCards({
        class: "mage",
        page: 1,
        pageSize: 3,
      });
      console.log(battleNetWrapper);
    }
    fetch();

    // const api = new BlizzAPI({
    //   region: "us",
    //   clientId: "e4b0c1cf4f14416cb1f68a417f53e6cc",
    //   clientSecret: "DtLcZEraCXzSmEoTU7GC8oLJZs4QPB1O",
    // });
    // const instance = axios.create({
    //   baseURL: `https://us.api.blizzard.com/hearthstone/cards?${api}`,
    // });
    // async function fetchData() {
    //   const request = await instance.get();
    //   console.log(request);
    //   return request;
    // }
    // fetchData();
    // console.log(api)

    // fetch(`https://us.api.blizzard.com/hearthstone/cards?${api}`)
    //   .then((response) => response.json())
    //   .then(data=>console.log(data))
    // console.log("klik");
  }, []);

  return (
    <div>
      <p>test</p>
    </div>
  );
}

export default Test;
