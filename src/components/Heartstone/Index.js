import React, { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import requests from "./requests";

import "./styles/Index.css";

function Heartstone() {
  const [selectedClass, setSelectedClass] = useState(requests.fetchMageCards);

  return (
    <div className="heartstone">
      <Header setSelectedClass={setSelectedClass} />
      <Result selectedClass={selectedClass} />
    </div>
  );
}

export default Heartstone;
