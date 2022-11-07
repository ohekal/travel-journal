import React from "react";
import "../App.css";
import Nav from "./Nav.js";
import Travel from "./Travel.js";
import Data from "../Data.js";

function App() {
  let travel = Data.map((travel) => <Travel key={travel.id} {...travel} />);
  return (
    <div className="App">
      <Nav />
      <section>{travel}</section>
    </div>
  );
}
export default App;
