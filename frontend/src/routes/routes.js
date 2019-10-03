import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../../src/pages/SignIn";
import Registre from "../../src/pages/SignUp";
import Feed from "../../src/pages/Feed";
import Profile from "../../src/pages/Profile";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Registre} />
        <Route path="/feed" component={Feed} />
        <Route path="/profile/1" component={Profile} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
