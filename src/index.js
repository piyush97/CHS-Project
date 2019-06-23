import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import DemoIndex from "./demo_page/Demo";
import HomeOne from "./HomeOne";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NoMAtch from "./pages/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DemoIndex}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-us`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404`}
            component={PageNotFound}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/products`}
            component={HomeOne}
          />
          <Route component={NoMAtch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.register();
