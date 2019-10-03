import {
  RECEIVE_ALL_ABILITIES,
} from '../../actions/ability_actions';

const AbilitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ABILITIES:
      return action.abilities;
    default:
      return state;
  }
};

export default AbilitiesReducer;