import React, { Component } from 'react';
import Swiper from 'react-id-swiper';


class ProjectSlider extends Component{

    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null
      }
    
      goNext() {
        if (this.swiper) this.swiper.slideNext()
      }
    
      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      }
    
      
    render(){

        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            spaceBetween: 30
        
        };
        
        let data = [
            {img: '1.jpg', sliderTitle: 'Construction Management', sliderShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', sliderLink: 'project-details'},
            {img: '1.jpg', sliderTitle: 'Power and Energy', sliderShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', sliderLink: 'project-details'},
            {img: '1.jpg', sliderTitle: 'Work Management', sliderShortDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim', sliderLink: 'project-details'},
        ];


        let DataList = data.map((val, i)=>{

            return(
                <div className="swiper-slide latest-project-slider__single-slide" key={i}>
                    <div className="row row-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="image">
                                <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <h3 className="count">{'0'+(i+1)}</h3>
                                <h2 className="title">{val.sliderTitle}</h2>
                                <p className="desc">{val.sliderShortDesc}</p>
                                <a href={`${process.env.PUBLIC_URL}/${val.sliderLink}`} className="see-more-link see-more-link--color">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
               {/*====================  project slider area ====================*/}
                <div className="project-slider-area grey-bg section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/* section title */}
                        <div className="section-title-area text-center">
                            <h2 className="section-title section-space--bottom--50">Latest Projects <span className="title-icon" /></h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="latest-project-slider">
                            <div className="latest-project-slider__container-area">
                                <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
                                    {DataList}
                                </Swiper>
                            
                                <button className="ht-swiper-button-prev ht-swiper-button-nav" onClick={this.goPrev}><i className="ion-ios-arrow-left" /></button>
                                <button className="ht-swiper-button-next ht-swiper-button-nav" onClick={this.goNext}><i className="ion-ios-arrow-forward" /></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*====================  End of project slider area  ====================*/}
            </div>
        )
    }
}


export default ProjectSlider;