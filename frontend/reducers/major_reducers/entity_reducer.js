import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';
import CharactersReducer from '../minor_reducers/character_reducer';
import VirtuesReducer from '../minor_reducers/virtue_reducer';
import FlawsReducer from '../minor_reducers/flaw_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  characters: CharactersReducer,
  virtues: VirtuesReducer,
  flaws: FlawsReducer,
});

export default EntitiesReducer;