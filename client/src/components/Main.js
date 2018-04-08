import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js"
import User from "./User.js"
import UserProfile from "./UserProfile.js"

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={User} />
      <Route path="/userProfile/:id" component={UserProfile} />
    </Switch>
  </main>
)

export default Main
