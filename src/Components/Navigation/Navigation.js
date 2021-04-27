import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/">
          <img
            src="https://cdn.worldvectorlogo.com/logos/marvel-logo.svg"
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
        </ul>
      </nav>
    );
  }
}
