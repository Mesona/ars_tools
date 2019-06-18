import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SideBarContainer from "./side_bar/side_bar_container";
import HomeContainer from "./home/home_container";
import CharacterShowContainer from "./character/show_container";

const App = () => {
  return (
    <div>
      <Modal />
      <Route path="/" component={NavBarContainer} />
      {/* <ProtectedRoute path="/" component={ SideBarContainer } /> */}
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        {/* <Route path="/users/:userId" component={} /> */}
        {/* <AuthRoute exact path="/" component={} /> */}
        {/* <Route path="/users/:userId/characters" component={} /> */}
        <Route
          path="/characters/:characterId"
          component={CharacterShowContainer}
        />

        <Redirect from="*" to="/" />
      </Switch>
      <ProtectedRoute path="/" component={SideBarContainer} />
      {/* <Route exact path="/" component={ FooterContainer } /> */}
    </div>
  );
};

export default App;
