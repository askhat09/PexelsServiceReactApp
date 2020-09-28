import React, { Component } from "react";
import Header from "../header/header";
import ImageGrid from "../imageGrid/imageGrid";
import GotService from "../../services/pexels";
import Search from "../search/search";

import "./app.css";

export default class App extends Component {
  pexels = new GotService();

  state = {
    photos: [],
    imgTitle: ""
  };

  componentDidMount() {
    this.renderImage();
  }

  renderImage() {
    this.pexels.getImages("curated").then((data) => {
      this.setState({ photos: data.photos });
      console.log(this.state.photos);
    });
  }

  onSearchSubmit = (term) => {
    let newStr = term[0].toUpperCase() + term.slice(1);
    this.setState({
      imgTitle: `${newStr} Photos`
    });
    this.pexels
      .getImages(`search?query=${term}+query&per_page=30`, {
        params: {
          query: term
        }
      })
      .then((data) => {
        this.setState({ photos: data.photos });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Search onSubmit={this.onSearchSubmit} />
        <ImageGrid images={this.state.photos} imgTitle={this.state.imgTitle} />
      </div>
    );
  }
}
