import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  id: null
};

const SessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action)
      const { id } = action.user.id;
      return merge({}, { id });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;