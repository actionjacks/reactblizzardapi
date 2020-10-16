import React, { useState } from "react";
import "./App.css";
import Test from "./Test";
// import Header from "./components/Header";
// import Result from "./components/Result";
// import request from "./requests";

function App() {
  // const [selectedClass, setSelectedClass] = useState(request.fetchMageCards);

  return (
    <div className="app">
      <Test/>
      {/* <Header setSelectedClass={setSelectedClass} />
      <Result selectedClass={selectedClass} /> */}
    </div>
  );
}

export default App;
