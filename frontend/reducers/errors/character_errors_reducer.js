import {
  RECEIVE_CHARACTER_ERRORS,
  CLEAR_ERRORS,
} from '../../actions/character_actions';
import { merge } from 'lodash';

const _nullErrors = [];

const CharacterErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHARACTER_ERRORS:
      return merge([], action.errors);
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default CharacterErrorsReducer;