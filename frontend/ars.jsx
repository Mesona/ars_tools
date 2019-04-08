import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// import * as PlacesAPIUtils from './actions/places_actions';

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');

//   let preloadedState = undefined;
//   if (window.currentUser) {
//     preloadedState = {
//       session: {
//         currentUser: window.currentUser
//       }
//     };
//   }

//   const store = configureStore(preloadedState);

//   window.getState = store.getState;
//   window.fetchPlace = PlacesAPIUtils.fetchPlace;


//   ReactDOM.render(<Root store={store} />, root);
// });


// -------

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render('YO', root);
});