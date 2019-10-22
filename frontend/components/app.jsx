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
            path="/characters/new/virtues/:characterId"
            render={(props) => <CharacterCreateContainer {...props} page="virtues" />}
          />

          <Route
            path="/characters/new/flaws/:characterId"
            render={(props) => <CharacterCreateContainer {...props} page="stats" />}
          />

          <Route
            path="/characters/new/stats/:characterId"
            render={(props) => <CharacterCreateContainer {...props} page="stats" />}
          />

          {/* <Route
            exact path="/character/new/:characterId"
            render={(props) => <CharacterCreateContainer {...props} page="new-character" />}
          /> */}

          <Route
          // TODO
          // FOR SOME REASON, PATH="/characters/new" DOES NOT WORK
          // I'M TIRED OF TROUBLESHOOTING SO USING THIS TEMPORARY FIX
            exact path="/character/new"
            // component={CharacterCreateContainer}
            // page="stats"
            // page="new-character"
            render={(props) => <CharacterCreateContainer {...props} page="new-character" />}
          />

          <Redirect from="*" to="/" />

        </Switch>
      </div>
    </div>
  );
};

export default App;
