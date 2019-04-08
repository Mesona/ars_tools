import { combineReducers } from 'redux';
import EntititiesReducer from './major_reducers/entity_reducer';
import SessionReducer from './minor_reducers/session_reducer';
import ErrorsReducer from './major_reducers/error_reducer';
// import UIReducer from './ui_reducer';

export default combineReducers({
  entities: EntititiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  // ui: UIReducer,
});
