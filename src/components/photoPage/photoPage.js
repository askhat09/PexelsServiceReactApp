import React from "react";
import "./photoPage.css";

export default class PhotoPage extends React.Component {
  render() {
    const images = this.props.images.map((image) => {
      if (image.id === this.props.image) {
        return <img key={image.id} src={image.src.large} alt="" />;
      }
    });

    const modal = this.props.modal ? "modal-overlay" : "modal-overlay hidden";

    return (
      <div className={modal}>
        <button
          onClick={() => {
            this.props.onCloseModal();
          }}
          className="close-modal"
        >
          <i className="rd__svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </i>
        </button>
        <div className="modal-content">
          <div className="photo-page">
            <section className="photo-page-section">
              <div className="photo-page__photo">{images}</div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
