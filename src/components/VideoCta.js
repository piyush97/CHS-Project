import React, { Component } from "react";
import ModalVideo from "react-modal-video";

class VideoCta extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">
                    Scaffold Castors
                  </h4>
                  <h3 className="video-cta-content__title">Castor Wheels </h3>
                  <p className="video-cta-content__text">
                    A castor wheel is an undriven, single, double, or compound
                    wheel that is designed to be mounted to the bottom of a
                    larger object (the “vehicle”) so as to enable that object to
                    be easily moved.
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn ht-btn--round"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <div className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="7T7Do2vYnNo"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <button onClick={this.openModal}>
                      <div className="cta-video-image__image">
                        <img
                          src="https://5.imimg.com/data5/AI/KT/MY-36532443/castor-wheel-500x500.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cta-video-image__icon">
                        <i className="ion-ios-play" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
