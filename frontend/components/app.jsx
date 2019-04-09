import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';


const App = () => (
  <div>
    <Modal />
    <Route path="/" component={ NavBarContainer } />
    {/* <Switch>
      <Route exact path="/" component={ PlacesIndexContainer } />
      <Route path="/places/:placeId/pages/:pageId" component={ PageIndexContainer } />

      <Redirect from="*" to="/" />
    </Switch>
    <Route exact path="/" component={ FooterContainer } /> */}
  </div>
);

export default App;