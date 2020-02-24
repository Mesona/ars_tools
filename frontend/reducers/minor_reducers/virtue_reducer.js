import merge from 'lodash/merge';

import {
  RECEIVE_ALL_VIRTUES,
  RECEIVE_VIRTUE,
} from '../../actions/virtue_actions';

const VirtuesReducer = (state = {}, action) => {
  let virtue;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIRTUES:
      return action.virtues;
    case RECEIVE_VIRTUE:
      virtue = action.virtue;
      // return merge({}, state, { [action.virtue.id]: virtue });
      return merge({}, state, { [action.virtue.name]: virtue });
    default:
      return state;
  }
};

export default VirtuesReducer;