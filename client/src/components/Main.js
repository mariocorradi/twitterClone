import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js"
import User from "./User.js"

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={User} />
    </Switch>
  </main>
)

export default Main
