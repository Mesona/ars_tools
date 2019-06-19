import * as CharactersAPIUtils from '../util/character_utils';

export const RECEIVE_ALL_CHARACTERS = 'RECEIVE_ALL_CHARACTERS';
export const RECEIVE_CHARACTER = 'RECEIVE_CHARACTER';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const RECEIVE_CHARACTER_ERRORS = 'RECEIVE_CHARACTER_ERRORS';
export const RESET_CHARACTERS = 'RESET_CHARACTERS';

const receiveAllCharacters = characters => ({
  type: RECEIVE_ALL_CHARACTERS,
  characters,
});

const receiveCharacter = character => ({
  type: RECEIVE_CHARACTER,
  character,
});

const removeCharacter = characterId => ({
  type: REMOVE_CHARACTER,
  characterId,
});

export const resetCharacters = () => ({
  type: RESET_CHARACTERS
});

export const receiveCharacterErrors = errors => ({
  type: RECEIVE_CHARACTER_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const requestAllCharacters = userId => dispatch => (
  CharactersAPIUtils.getCharacters(userId)
    .then(characters => dispatch(receiveAllCharacters(characters)),
      errors => dispatch(receiveCharacterErrors(errors.responseJSON)))
);

export const requestCharacter = id => dispatch => (
  CharactersAPIUtils.getCharacter(id)
    .then(character => dispatch(receiveCharacter(character)),
      errors => dispatch(receiveCharacterErrors(errors.responseJSON)))
);

export const createCharacter = character => dispatch => (
  CharactersAPIUtils.postCharacter(character)
    .then(character => dispatch(receiveCharacter(character)),
      errors => dispatch(receiveCharacterErrors(errors.responseJSON)))
);

export const updateCharacter = character => dispatch => (
  CharactersAPIUtils.patchCharacter(character)
    .then(character => dispatch(receiveCharacter(character)),
      errors => dispatch(receiveCharacterErrors(errors.responseJSON)))
);

export const deleteCharacter = characterId => dispatch => (
  CharactersAPIUtils.deleteCharacter(characterId)
    .then(character => dispatch(removeCharacter(characterId)),
      errors => dispatch(receiveCharacterErrors(errors.responseJSON)))
);