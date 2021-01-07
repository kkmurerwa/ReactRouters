import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;