import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import Blogs from "./containers/blogs"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/title" component={TitleScreen} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
