import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import List from "./Components/List/List";
import ListComic from "./Components/List/ListComic";
import ListSeries from "./Components/List/ListSeries";



const App = () => {
  return (
    <Router>
    <Navigation/>
     <Route path="/" exact component={List}/>
     {/* <Route path="/ListComic" component={ListComic}/>
     <Route path="/ListSeries" component={ListSeries}/> */}
    </Router>
  );
};

export default App;
