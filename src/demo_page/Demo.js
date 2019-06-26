import React, { Component } from "react";
import Footer from "../components/Footer";
import "./demo.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FeatureIcon from "../components/FeatureIcon";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
class Demo extends Component {
  render() {
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Enoc Refinery" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Sohar Power Plant"
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Saudi-Aramco" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Ruwais-Refinery" }
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl:
          "http://www.chsdxb.com/wp-content/uploads/2013/01/Enoc-Refinery1.jpg",
        contentTitle: "Enoc Refinery",
        contentDesc:
          "CHS is proud to be associated with some of the renowned projects in the region with a varying degree of complexities involved in each of these projects. ",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl:
          "http://www.chsdxb.com/wp-content/gallery/gallery/thumbs/thumbs_Sohar-Power-Plant.jpg",
        contentTitle: "Sohar Power Plant",
        contentDesc:
          "CHS is proud to be associated with some of the renowned projects in the region with a varying degree of complexities involved in each of these projects. ",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl:
          "http://www.chsdxb.com/wp-content/gallery/gallery/thumbs/thumbs_Saudi-Aramco.jpg",
        contentTitle: "Saudi-Aramco",
        contentDesc:
          "CHS is proud to be associated with some of the renowned projects in the region with a varying degree of complexities involved in each of these projects. ",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl:
          "http://www.chsdxb.com/wp-content/gallery/gallery/thumbs/thumbs_Ruwais-Refinery.jpg",
        contentTitle: "Ruwais-Refinery",
        contentDesc:
          "CHS is proud to be associated with some of the renowned projects in the region with a varying degree of complexities involved in each of these projects. ",
        serviceLink: "service-details-left-sidebar"
      }
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(${val.bgUrl})`
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });
    AOS.init();

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
                src="https://slika-api-dev-serverlessdeploymentbucket-1nf3v07u6dz2g.s3.amazonaws.com/My+Movie.mp4"
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
                <div
                  className="hero-content text-center col-12"
                  style={{
                    border: "3px solid white",
                    paddingTop: "10%",
                    paddingBottom: "10%"
                  }}
                >
                  <h1 className="animated bounceInUp">
                    Creative House Scaffolding LLC
                  </h1>
                </div>
              </div>
            </div>
            <center>
              {" "}
              <i
                style={{
                  fontWeight: "800",
                  color: "white",
                  paddingTop: "20%"
                }}
                className="fa fa-angle-down iconic animated bounce infinite"
              />
            </center>
          </div>

          <div>
            {/*====================  service tab area ====================*/}
            <div className="service-tab-area section-space--inner--120">
              <div className="container">
                <div className="">
                  <div className="col-lg-12">
                    <div className="section-title-area text-center">
                      <h2
                        className="section-title section-space--bottom--50 "
                        style={{ paddingTop: "40px" }}
                      >
                        PROJECTS <span className="title-icon" />
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* service tab wrapper */}

                    <div className="service-tab-wrapper" data-aos="slide-left">
                      <Tabs>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <TabList>
                              <div className="service-tab__link-wrapper">
                                {serviceTabMenuDatalist}
                              </div>
                            </TabList>
                          </div>

                          <div className="col-md-8">
                            {serviceTabContentDatalist}
                          </div>
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====================  End of service tab area  ====================*/}
          </div>
          <div data-aos="slide-right">
            <FeatureIcon />
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
