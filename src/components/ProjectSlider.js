import React, { Component } from "react";
import Swiper from "react-id-swiper";

class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      spaceBetween: 30
    };

    let data = [
      {
        img:
          "https://4.imimg.com/data4/ID/SF/MY-1156716/tube-end-cap-500x500.jpg",
        sliderTitle: "Tube End Cap",
        sliderShortDesc:
          "To protect the users from injuries against scaffold protruding pipe-ends. Simple to fix & compliance to safety requirement. High visible color and it fits any type of scaffold tubes of 48.3 mm diameter.",
        sliderLink: "project-details"
      },
      {
        img:
          "http://www.chilwellproducts.com/wp-content/uploads/2015/04/11.jpg",
        sliderTitle: "Board End Bands",
        sliderShortDesc: `
          Size 
          550mm x 25mm x 0.5mm
          
          Made of mild steel and comply to BS 729 Standards.
          
          `,
        sliderLink: "project-details"
      },
      {
        img:
          "https://www.dtc-uk.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/1/1/11179-STB70M120_C_1.jpg",
        sliderTitle: "Spirit Level",
        sliderShortDesc:
          "Scaffold bridge level (Magnetic) made of aluminum especially designed to be used with all types of scaffold for easy and accurate level reading.",
        sliderLink: "project-details"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div
          className="swiper-slide latest-project-slider__single-slide"
          key={i}
        >
          <div className="row row-30 align-items-center">
            <div className="col-lg-6">
              <div className="image">
                <img src={`${val.img}`} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h3 className="count">{"0" + (i + 1)}</h3>
                <h2 className="title">{val.sliderTitle}</h2>
                <p className="desc">{val.sliderShortDesc}</p>
                <a
                  href={`${process.env.PUBLIC_URL}/${val.sliderLink}`}
                  className="see-more-link see-more-link--color"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  project slider area ====================*/}
        <div className="project-slider-area grey-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Scaffold Tools & Ancillary
                    <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="latest-project-slider">
                  <div className="latest-project-slider__container-area">
                    <Swiper
                      {...params}
                      ref={node => {
                        if (node) this.swiper = node.swiper;
                      }}
                    >
                      {DataList}
                    </Swiper>

                    <button
                      className="ht-swiper-button-prev ht-swiper-button-nav"
                      onClick={this.goPrev}
                    >
                      <i className="ion-ios-arrow-left" />
                    </button>
                    <button
                      className="ht-swiper-button-next ht-swiper-button-nav"
                      onClick={this.goNext}
                    >
                      <i className="ion-ios-arrow-forward" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of project slider area  ====================*/}
      </div>
    );
  }
}

export default ProjectSlider;
