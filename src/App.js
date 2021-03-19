import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import Heartstone from "./components/Heartstone";
import Diablo from "./components/Diablo";
import Starcraft from "./components/Starcraft";
import Wow from "./components/Wow";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <p>Select Game</p>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/heartstone">heartstone</NavLink>
          </li>
          <li>
            <NavLink to="/diablo">diablo</NavLink>
          </li>
          <li>
            <NavLink to="/starcraft">starcraft</NavLink>
          </li>
          <li>
            <NavLink to="/wow">wow</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/wow">
            <Wow />
          </Route>
          <Route path="/starcraft">
            <Starcraft />
          </Route>
          <Route path="/diablo">
            <Diablo />
          </Route>
          <Route path="/heartstone">
            <Heartstone />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
