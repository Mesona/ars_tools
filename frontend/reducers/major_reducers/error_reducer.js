import { combineReducers } from 'redux';

import SessionErrorsReducer from '../errors/session_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
});

export default ErrorsReducer;