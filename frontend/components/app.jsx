import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SideBarContainer from "./side_bar/side_bar_container";
import HomeContainer from "./home/home_container";
import CharacterShowContainer from "./character/show_container";
import CharacterCreateContainer from "./character/create_container";

const App = () => {
  return (
    <div>
      <Modal />
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/test" component={CharacterCreateContainer} />
        {/* <Route path="/users/:userId" component={} /> */}
        {/* <AuthRoute exact path="/" component={} /> */}
        <Route
          path="/characters/:characterId"
          component={CharacterShowContainer}
        />

        <Route
        // TODO
        // FOR SOME REASON, PATH="/characters/new" DOES NOT WORK
        // I'M TIRED OF TROUBLESHOOTING SO USING THIS TEMPORARY FIX
          exact path="/character/new"
          component={CharacterCreateContainer}
          page="stats"
        />

        <Route
          path="/character/new/:characterId"
          component={CharacterCreateContainer}
          page="stats"
        />

        <Route
          path="character/new/virtues/:characterId"
          component={CharacterCreateContainer}
          page="virtues"
        />

        <Redirect from="*" to="/" />
      </Switch>
      <ProtectedRoute path="/" component={SideBarContainer} />
    </div>
  );
};

export default App;
