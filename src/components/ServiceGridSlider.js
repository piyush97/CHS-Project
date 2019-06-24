import React, { Component } from "react";
import Swiper from "react-id-swiper";

class ServiceGridSlider extends Component {
  render() {
    const params = {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    };
    let data = [
      {
        img: "http://www.chsdxb.com/wp-content/uploads/2012/12/Formwork1.jpg",
        iconName: "flaticon-002-welding",
        serviceTitle: "Formwork",
        serviceExcerpt:
          "Formwork is the term given to either temporary or permanent molds into which concrete or similar materials are poured.",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img: "http://www.chsdxb.com/wp-content/uploads/2013/10/korean-beam.jpg",
        iconName: "flaticon-004-walkie-talkie",
        serviceTitle: "Access Scaffold",
        serviceExcerpt:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img:
          "http://image.made-in-china.com/2f0j00RCTElsQjuzrH/Staggered-Staircase.jpg",
        iconName: "flaticon-015-cart",
        serviceTitle: "Aluminum Mobile Tower",
        serviceExcerpt: "Staircase Tower and Aluminium Mobile Tower",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img:
          "http://www.chsdxb.com/wp-content/uploads/2012/12/Hardwood-Rung..jpg",
        iconName: "flaticon-010-tank-1",
        serviceTitle: "Ladders",
        serviceExcerpt: `Pole Ladder
          Finest Quality, Heavy duty Ladder.
          Hardwood Rungs at 250 mm Centre.
          Standard Quality – with tie rods at intervals.
          Super quality – with tie rods under every rung.
          
          Matched Scandinavian Whitewood Sites, finished with 2 coats of ladder varnish.`,
        serviceUrl: "service-details-left-sidebar"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  <img src={`${val.img}`} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="icon">
                <i className={val.iconName} />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceExcerpt}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  service grid slider area ====================*/}
        <div className="service-grid-slider-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Products <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="service-slider">
                  <Swiper {...params}>{DataList}</Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;
