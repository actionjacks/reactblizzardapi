import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import request from "./requests";

function App() {
  const [selectedClass, setSelectedClass] = useState(request.fetchMageCards);

  return (
    <div className="app">
      <Header setSelectedClass={setSelectedClass} />
      <Result setSelectedClass={setSelectedClass} />
    </div>
  );
}

export default App;
