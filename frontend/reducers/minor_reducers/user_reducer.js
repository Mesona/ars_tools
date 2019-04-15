import merge from 'lodash/merge';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER,
} from '../../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  let user;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      user = action.user;
      return merge({}, state, { [action.user.id]: user });
    default:
      return state;
  }
};

export default UsersReducer;