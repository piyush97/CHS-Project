import React, { Component } from "react";
import Footer from "../components/Footer";
import Typed from "react-typed";
import "./demo.css";
import AddToHomescreen from "react-add-to-homescreen";
class Demo extends Component {
  handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };
  render() {
    return (
      <div className="body">
        <AddToHomescreen
          onAddToHomescreenClick={this.handleAddToHomescreenClick}
        />

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
                  <a className="buy-btn" href="/products">
                    Products{" "}
                  </a>
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
                src="https://slika-api-dev-serverlessdeploymentbucket-1nf3v07u6dz2g.s3.amazonaws.com/bg.mp4"
                autoPlay="autoplay"
                loop="loop"
                id="bgvideo"
                allowFullScreen="allowfullscreen"
                muted="muted"
                playsInline=""
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
                      style={{ lineHeight: "20px", lineHeightStep: "29px" }}
                      strings={[
                        "C",
                        "H",
                        "S",
                        "Creative",
                        "House",
                        "Scaffolding",
                        "C H S"
                      ]}
                      typeSpeed={50}
                    />
                  </h1>
                  <p>Creative House Scaffolding LLC</p>
                </div>
              </div>
            </div>
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
