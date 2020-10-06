import React, { Component } from "react";
import Header from "../header/header";
import ImageGrid from "../imageGrid/imageGrid";
import GotService from "../../services/pexels";
import Search from "../search/search";
import PhotoPage from "../photoPage/photoPage";

import "./app.css";

export default class App extends Component {
  pexels = new GotService();

  state = {
    photos: [],
    imgTitle: "",
    selectedPhoto: null,
    modal: false
  };

  componentDidMount() {
    this.renderImage();
  }

  renderImage() {
    this.pexels.getImages("curated?per_page=40").then((data) => {
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

  onPhotoSelected = (id) => {
    this.setState({ selectedPhoto: id, modal: true });
  };

  onCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Search onSubmit={this.onSearchSubmit} />
        <ImageGrid
          images={this.state.photos}
          imgTitle={this.state.imgTitle}
          onPhotoSelected={this.onPhotoSelected}
        />
        <PhotoPage
          images={this.state.photos}
          image={this.state.selectedPhoto}
          onCloseModal={this.onCloseModal}
          modal={this.state.modal}
        />
      </div>
    );
  }
}
