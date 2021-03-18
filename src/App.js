import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import request from "./requests";
require("dotenv").config();

function App() {
  const [selectedClass, setSelectedClass] = useState(request.fetchMageCards);

  return (
    <div className="app">
      <Header setSelectedClass={setSelectedClass} />
      <Result selectedClass={selectedClass} />
    </div>
  );
}

export default App;

//add fetch data all game from blizz
