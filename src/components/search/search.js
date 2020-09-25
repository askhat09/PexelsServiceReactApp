import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
  render() {
    return (
      <form className="search">
        <input className="search-input" placeholder="Искать" required></input>
        <button className="button">Найти</button>
      </form>
    );
  }
}
