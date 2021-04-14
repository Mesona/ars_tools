import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { ProtectedRoute } from "../util/route_utils";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SideBarContainer from "./side_bar/side_bar_container";
import HomeContainer from "./home/home_container";
import CharacterShowContainer from "./character/show_container";
import CharacterCreateContainer from "./character/creation/create_container";
// import CharacterCreateVirtuesContainer from './character/creation/test_virtues_container';

const App = () => {

  return (
    <div>
      <Modal />
      <Route path="/" component={NavBarContainer} />
      <div className="componentSpreader" >
        <ProtectedRoute path="/" component={SideBarContainer} />

        <Switch>
          <Route exact path="/" component={HomeContainer} />

          <Route
            exact path="/characters/:characterId"
            component={CharacterShowContainer}
          />

          <Route
            path="/characters/new"
            component={CharacterCreateContainer}
          />

          <Redirect from="*" to="/" />

        </Switch>
      </div>
    </div>
  );
};

export default App;

// TODO: All pages should redirect to login if no current user
