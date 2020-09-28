import React from "react";

import "./imageGrid.css";

const ImageGrid = (props) => {
  const { imgTitle } = props;
  const images = props.images.map((image) => {
    return (
      <div key={image.id} className="photo-wrap-column">
        <div className="photo-wrap-column-box">
          <img src={image.src.large} alt="suret"></img>
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
};

export default ImageGrid;
