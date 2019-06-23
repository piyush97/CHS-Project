import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Contact extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      title="google-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462074.01271085476!2d55.27083042318662!3d25.2047998944372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4287f20e86fb%3A0x5cba3244ad44f5a7!2sCreative+House+Scaffolding+LLC!5e0!3m2!1sen!2sin!4v1561312587087!5m2!1sen!2sin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Contact Information</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            P O Box 115713, Dubai, UAE Executive Bay, Business
                            Bay, Block-B 904
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:+97144474117">+ 971 4 447 4117</a>
                          <a href="tel:+97144474116">+ 971 4 447 4116</a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:info@chsdxb.com"> info@chsdxb.com</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Leave Your Message</h3>
                    <form id="contact-form">
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button>Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
