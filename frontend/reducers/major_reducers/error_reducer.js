import { combineReducers } from 'redux';

import SessionErrorsReducer from '../errors/session_errors_reducer';
import CharacterErrorsReducer from '../errors/character_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  characters: CharacterErrorsReducer,
});

export default ErrorsReducer;