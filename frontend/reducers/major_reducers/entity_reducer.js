import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
});

export default EntitiesReducer;