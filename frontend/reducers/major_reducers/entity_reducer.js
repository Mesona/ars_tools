import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';
import CharactersReducer from '../minor_reducers/character_reducer';
import VirtuesReducer from '../minor_reducers/virtue_reducer';
import FlawsReducer from '../minor_reducers/flaw_reducer';
import CreateVirtuesAndFlawsReducer from '../minor_reducers/create_virtues_and_flaws_reducer';
import AbilitiesReducer from '../minor_reducers/ability_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  characters: CharactersReducer,
  virtues: VirtuesReducer,
  flaws: FlawsReducer,
  createVirtuesAndFlaws: CreateVirtuesAndFlawsReducer,
  abilities: AbilitiesReducer,
});

export default EntitiesReducer;