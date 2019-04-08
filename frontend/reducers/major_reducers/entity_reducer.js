import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';

const EntititiesReducer = combineReducers({
  users: UsersReducer,
});

export default EntititiesReducer;