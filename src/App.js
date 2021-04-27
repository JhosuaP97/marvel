import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import List from "./Components/List/List";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={List} />
    </Router>
  );
};

export default App;
