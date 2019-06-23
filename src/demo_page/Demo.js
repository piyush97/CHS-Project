import React, { Component } from "react";
import Footer from "../components/Footer";
import Typed from "react-typed";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./demo.css";
class Demo extends Component {
  state = {
    didViewCountUp: false
  };
  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <div className="body">
        <div className="landing-page-wrapper">
          {/* Start Header Section */}
          <div className="header-section section sticker">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                {/* Logo */}
                <div className="logo col-6 text-left">
                  <a href="/">
                    <img
                      src="assets/img/landing/logo-light.png"
                      className="img-fluid"
                      alt=""
                    />
                    <img
                      src="assets/img/landing/logo.png"
                      alt=""
                      className="sticky-logo img-fluid"
                    />
                  </a>
                </div>
                {/* Logo */}
                <div className="col-6 text-right">
                  <button className="buy-btn">Products </button>
                </div>
              </div>
            </div>
          </div>
          {/* Header Section End */}
          {/* Start Hero Section */}
          <div
            className="hero-section section overlay"
            style={{ height: "100vh", width: "100% !important" }}
          >
            <div className="container">
              <video
                src="https://d1nlhv9o12q2aq.cloudfront.net/static/assets-bs4/image/sign/sign-cover-video.mp4"
                autoplay="autoplay"
                loop="loop"
                id="bgvideo"
                allowfullscreen="allowfullscreen"
                muted="muted"
                playsinline=""
                style={{
                  width: "100% !important",
                  height: "100vh !important",
                  objectFit: "cover"
                }}
                className="w-100 video-height"
              />
              <div className="row">
                <div className="hero-content text-center col-12">
                  <h1>
                    <Typed
                      strings={[
                        "C",
                        "H",
                        "S",
                        "Creative",
                        "House",
                        "Scaffolding",
                        "Creative House Scaffolding LLC"
                      ]}
                      typeSpeed={80}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/*====================  fun fact area ====================*/}

            <div className="grid-container" style={{ display: "grid" }}>
              <div className="grid-item" style={{ display: "inline-grid" }}>
                <img src={`assets/img/icons/`} alt="" />
                <h1 style={{ color: "black" }}>
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={this.state.didViewCountUp ? 575 : 0} />
                  </VisibilitySensor>
                </h1>
                <h4>Customers</h4>
              </div>
            </div>
            <div className="grid-item" style={{ display: "inline-grid" }}>
              <img src={`assets/img/icons/`} alt="" />
              <h1 style={{ color: "black" }}>
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.didViewCountUp ? 975 : 0} />
                </VisibilitySensor>
              </h1>
              <h4>Customers</h4>
            </div>
            {/*====================  End of fun fact area  ====================*/}
          </div>
          <div
            className="footer-section section pt-65 pb-50 overlay bg-img"
            data-bg="assets/img/landing/hero-bg.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          {/* Footer Section End */}
          {/*====================  scroll top ====================*/}
          <button className="scroll-top" id="scroll-top">
            <i className="ion-android-arrow-up" />
          </button>
          {/*====================  End of scroll top  ====================*/}
        </div>
      </div>
    );
  }
}

export default Demo;
