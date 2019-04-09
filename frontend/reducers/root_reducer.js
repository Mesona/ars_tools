import { combineReducers } from 'redux';
import EntitiesReducer from './major_reducers/entity_reducer';
import SessionReducer from './minor_reducers/session_reducer';
import ErrorsReducer from './major_reducers/error_reducer';
import UIReducer from './major_reducers/ui_reducer';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
});
