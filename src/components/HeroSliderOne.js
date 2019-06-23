import React, { Component } from "react";
import Swiper from "react-id-swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: "fade",
      navigation: {
        nextEl: ".ht-swiper-button-next",
        prevEl: ".ht-swiper-button-prev"
      },
      renderPrevButton: () => (
        <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-left" />
        </div>
      ),
      renderNextButton: () => (
        <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block">
          <i className="ion-ios-arrow-forward" />
        </div>
      ),
      autoplay: {
        delay: 5000
      }
    };

    let data = [
      {
        bgImg:
          "https://image.freepik.com/free-photo/construction-site_53876-14088.jpg",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
        btnLink: "contact-us"
      },
      {
        bgImg:
          "https://image.freepik.com/free-photo/industry-construction-site-labor-people-worker-wire-steel-bar_39730-1474.jpg",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.",
        btnLink: "contact-us"
      },
      {
        bgImg:
          "https://image.freepik.com/free-photo/construction-silhouette_1150-8336.jpg",
        sliderTitle: "Horizontal Framework",
        sliderSubtitle:
          "Horizontal formwork is used to temporarily support horizontal concrete work such as concrete slabs.",
        btnLink: "Buy Now"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content">
                      <h2
                        className="hero-slider__title"
                        style={{
                          boxShadow: "30px",
                          textShadow: "2px 2px #111"
                        }}
                      >
                        {val.sliderTitle}
                      </h2>
                      <p
                        className="hero-slider__text"
                        style={{
                          boxShadow: "30",
                          textShadow: "2px 2px #111"
                        }}
                      >
                        {val.sliderSubtitle}
                      </p>
                      <a
                        className="hero-slider__btn"
                        href={`${process.env.PUBLIC_URL}/${val.btnLink}`}
                        style={{
                          boxShadow: "30",
                          textShadow: "2px 2px #111"
                        }}
                      >
                        {" "}
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <Swiper {...params}>{DataList}</Swiper>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderOne;
