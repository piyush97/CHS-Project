import React, {Component} from 'react';
class NavBar extends Component{
    render(){
        return(
            <div>
                {/*====================  header area ====================*/}
                <div className="header-area header-sticky header-sticky--default">
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            {/* top bar left */}
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--default d-inline-block">GET A QUOTE</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                    <a href={`${process.env.PUBLIC_URL}/home-one`}>
                                        <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                    </a>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Phone</h6>
                                        <p className="header-info-single-item__subtitle">98 9875 5968 54</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Address</h6>
                                        <p className="header-info-single-item__subtitle">your address goes here</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger">
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/home-one`}>HOME</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/home-one`}>Homepage One</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/home-two`}>Homepage Two</a></li>
                                                </ul>
                                            </li>
                                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</a></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/services`}>SERVICE</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/services`}>Service Page</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Service Details Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}>Service Details Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/projects`} >PROJECT</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/projects`} >Project Page</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/project-details`}>Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</a> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
            </div>
        )
    }
}


export default NavBar;