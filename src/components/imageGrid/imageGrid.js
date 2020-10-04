import React from "react";

import "./imageGrid.css";

export default class ImageGrid extends React.Component {
  render() {
    const { imgTitle } = this.props;

    const images = this.props.images.map((image) => {
      return (
        <div key={image.id} className="photo-wrap-column">
          <div className="photo-wrap-column-box">
            <img
              src={image.src.large}
              onClick={() => this.props.onPhotoSelected(image.id)}
              alt="suret"
            ></img>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="result-title">{imgTitle}</div>
        <div className="result-wrap">
          <div className="photo-wrap">{images}</div>
        </div>
      </>
    );
  }
}
