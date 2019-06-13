import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';
import CharactersReducer from '../minor_reducers/character_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  characters: CharactersReducer,
});

export default EntitiesReducer;