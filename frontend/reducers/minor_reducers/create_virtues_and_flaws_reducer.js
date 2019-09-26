import merge from 'lodash/merge';

import {
  RECEIVE_VIRTUE,
  REMOVE_VIRTUE,
  RECEIVE_VIRTUES,
  RECEIVE_FLAW,
  REMOVE_FLAW,
  RECEIVE_FLAWS,
} from '../../actions/create_virtues_and_flaws_actions';

const CreateVirtuesAndFlawsReducer = (state = {}, action) => {
  let virtue;
  let flaw;
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIRTUE:
      virtue = action.virtue;
      return merge({}, state, { [action.virtue.id]: virtue});
    case REMOVE_VIRTUE:
      newState = merge({}, state);
      delete newState[action.virtue.id];
      return newState;
    case RECEIVE_VIRTUES:
      return action.virtues;
    case RECEIVE_FLAW:
      flaw = action.flaw;
      return merge({}, state, { [action.flaw]: flaw});
    case REMOVE_FLAW:
      newState = merge({}, state);
      delete newState[action.flaw.id];
      return newState;
    case RECEIVE_FLAWS:
      return action.flaws;
    default:
      return state;
  }
};

export default CreateVirtuesAndFlawsReducer;