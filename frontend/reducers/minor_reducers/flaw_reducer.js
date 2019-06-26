import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FLAWS,
  RECEIVE_FLAW,
} from '../../actions/flaw_actions';

const FlawsReducer = (state = {}, action) => {
  let flaw;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FLAWS:
      return action.flaws;
    case RECEIVE_FLAW:
      flaw = action.flaw;
      return merge({}, state, { [action.flaw.id]: flaw });
    default:
      return state;
  }
};

export default FlawsReducer;