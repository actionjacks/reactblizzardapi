import React from "react";
import "./App.css";

function App() {
  //test api request
  fetch(
    "https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=shaman&manaCost=1&access_token=USPxgDBa48WEeftdq1vdMJ5SmhQh3EGsPC"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div className="app">
      <h1>hello web world</h1>
    </div>
  );
}

export default App;
