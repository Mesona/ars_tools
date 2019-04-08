import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';
import { merge } from 'lodash';

// import { CLOSE_MODAL } from '../actions/modal_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge([], action.errors);
    case RECEIVE_CURRENT_USER:
    // case CLOSE_MODAL:
    //   return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;