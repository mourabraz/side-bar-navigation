import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import PublicPage1 from "../pages/PublicPage1";
import PublicPage2 from "../pages/PublicPage2";
import PrivatePage1 from "../pages/PrivatePage1";
import PrivatePage2 from "../pages/PrivatePage2";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/publicpage1" component={PublicPage1} />
    <Route path="/publicpage2" component={PublicPage2} />

    <Route path="/privatepage1" component={PrivatePage1} isPrivate />
    <Route path="/privatepage2" component={PrivatePage2} isPrivate />
  </Switch>
);

export default Routes;
