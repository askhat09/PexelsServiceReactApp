import React from "react";
import "./photoPage.css";

export default class PhotoPage extends React.Component {
  render() {
    const images = this.props.images.map((image) => {
      if (image.id === this.props.image) {
        return <img key={image.id} src={image.src.large2x} alt="" />;
      }
    });

    const photographer = this.props.images.map((image) => {
      if (image.id === this.props.image) {
        return image.photographer;
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
            <section className="photo-page__section--action-bar">
              <div className="level">
                <div className="level__left">
                  <div className="level__item">
                    <div className="js-photo-page-mini-profile-avatar photo-page__mini-profile__avatar rd__avatar rd__avatar--large">
                      <img
                        alt="undefined"
                        height="50"
                        src="https://images.pexels.com/users/avatars/2441340/-332.jpeg?w=256&amp;h=256&amp;fit=crop&amp;auto=compress"
                        width="50"
                      />
                    </div>
                    <div className="photo-page__mini-profile__text">
                      <h3 className="js-photo-page-mini-profile-full-name photo-page__mini-profile__text__title">
                        {photographer}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="level__right">
                  <div className="js-photo-page-action-buttons-download">
                    <a
                      className="js-download-a-tag rd__button rd__button--download"
                      download=""
                      href="/photo/2422560/download/?search_query=&amp;tracking_id=g9vlbjpk5sv"
                      target="_blank"
                      data-id="2422560"
                    >
                      <span>Бесплатное скачивание</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="photo-page-section">
              <div className="photo-page__photo">{images}</div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
