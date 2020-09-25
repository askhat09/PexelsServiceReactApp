import React, { Component } from "react";
import Header from "../header/header";
import ImageGrid from "../imageGrid/imageGrid";
import GotService from "../../services/pexels";

import "./app.css";

export default class App extends Component {
  pexels = new GotService();

  state = {
    photos: []
  };

  componentDidMount() {
    this.renderImage();
  }

  renderImage() {
    this.pexels.getImages("curated").then((photos) => {
      this.setState({ photos });
      console.log(this.state.photos);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ImageGrid />
      </div>
    );
  }
}
