import React, { Component } from "react";
import Search from "../search/search";

import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="hero">
        <div className="container">
          <div className="hero__content">
            <h1>
              <span className="big">Графические ресурсы для всех</span>
              бесплатные векторы, PSD, иконки и фотографии
            </h1>
            <Search />
          </div>
        </div>
      </header>
    );
  }
}
