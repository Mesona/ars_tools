import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = { 
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: {
        currentUser: currentUser
      }
    };

    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }


  // TESTING

  // END TESTING

  ReactDOM.render(<Root store={store} />, root);
});
