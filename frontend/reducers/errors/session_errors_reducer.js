import {
  RECEIVE_SESSION_ERRORS,
  // RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../../actions/session_actions';
import { merge } from 'lodash';

// import { CLOSE_MODAL } from '../../actions/modal_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge([], action.errors);
    // case RECEIVE_CURRENT_USER:
      // return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    // case CLOSE_MODAL:
    //   return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;