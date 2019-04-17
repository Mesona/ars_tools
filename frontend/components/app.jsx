import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SideBarContainer from './side_bar/side_bar_container';
import HomeContainer from './home/home_container';


const App = () => (
  <div>
    <Modal />
    <Route path="/" component={ NavBarContainer } />
    <Route path="/" component={ HomeContainer } />
    <ProtectedRoute path="/" component={ SideBarContainer } />
    {/* <ProtectedRoute path="/" component={ SideBarContainer } /> */}
    <Switch>
      {/* <Route path="/users/:userId" component={ Home } /> */}
      {/* <AuthRoute exact path="/" component={ Home } /> */}
      {/* <ProtectedRoute exact path="/" component={ Intro } /> */}
      {/* <Route path="/places/:placeId/pages/:pageId" component={ PageIndexContainer } /> */}

      {/* <Redirect from="*" to="/" /> */}
    </Switch>
    {/* <Route exact path="/" component={ FooterContainer } /> */}
  </div>
);

export default App;