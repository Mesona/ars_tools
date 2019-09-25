import merge from 'lodash/merge';

import {
  RECEIVE_VIRTUE,
  RECEIVE_VIRTUES,
  RECEIVE_FLAW,
  RECEIVE_FLAWS,
} from '../../actions/create_virtues_and_flaws_actions';

const CreateVirtuesAndFlawsReducer = (state = {}, action) => {
  let virtue;
  let flaw;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIRTUE:
      virtue = action.virtue;
      return merge({}, state, { [action.virtue]: virtue});
    case RECEIVE_VIRTUES:
      return action.virtues;
    case RECEIVE_FLAW:
      flaw = action.flaw;
      return merge({}, state, { [action.flaw]: flaw});
    case RECEIVE_FLAWS:
      return action.flaws;
    default:
      return state;
  }
};

export default CreateVirtuesAndFlawsReducer;