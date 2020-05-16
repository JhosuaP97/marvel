import React from "react";
import "./App.scss";
import List from "./Components/List/List";

const App = () => {
  return (
    <div className="o-container">
      <nav>
        <label className="o-logo">Marvel</label>
        <ul>
          <li>
            <a href="#" className="o-active">
              Personajes
            </a>
          </li>
          <li>
            <a href="#">Comics</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
        </ul>
      </nav>
      <List />
    </div>
  );
};

export default App;
