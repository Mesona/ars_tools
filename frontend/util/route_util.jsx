
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


// // renders component if logged out, otherwise redirects to the root url
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

// // renders component if logged in, otherwise redirects to the login page
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : null 
    )}
  />
);

// // access the Redux state to check if the user is logged in
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

// // connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// // connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));