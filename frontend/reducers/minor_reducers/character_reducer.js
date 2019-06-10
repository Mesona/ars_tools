import merge from 'lodash/merge';

import {
  RECEIVE_ALL_CHARACTERS,
  RECEIVE_CHARACTER,
  REMOVE_CHARACTER,
  RESET_CHARACTERS,
} from '../../actions/character_actions';

const CharactersReducer = (state = {}, action) => {
  let character;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHARACTERS:
      return action.characters;
    case RECEIVE_CHARACTER:
      character = action.character;
      return merge({}, state, { [action.character.id]: character });
    case REMOVE_CHARACTER:
      character = merge({}, state);
      delete character[action.characterId];
      return character;
    case RESET_CHARACTERS:
      return {};
    default:
      return state;
  }
};

export default CharactersReducer;