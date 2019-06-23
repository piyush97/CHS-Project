import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DemoIndex from './demo_page/Demo';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import About from './pages/About';
import Services from './service/Services';
import ServiceDetailsLeftSidebar from './service/ServiceDetailsLeftSidebar';
import ServiceDetailsRightSidebar from './service/ServiceDetailsRightSidebar';
import Projects from './project/Projects';
import ProjectDetails from './project/ProjectDetails';
import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogRightSidebar from './blog/BlogRightSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from './blog/BlogDetailsRightSidebar';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DemoIndex}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Services}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`} component={ServiceDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details-right-sidebar`} component={ServiceDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details`} component={ProjectDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} component={BlogDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`} component={BlogDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                    <Route component={NoMAtch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();