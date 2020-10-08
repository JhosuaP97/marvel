import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import "./Navigation.scss";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
            alt="iron man"
            className="o-logo"
          ></img>
        </NavLink>
        <ul>
          <li>
            <NavLink activeClassName="o-active" exact to="/">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="o-active" exact to="/ListComic">
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="o-active" exact to="/ListSeries">
              Series
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
