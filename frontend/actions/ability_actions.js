import * as AbilitiesAPIUtils from '../util/ability_utils';

export const RECEIVE_ALL_ABILITIES = `RECEIVE_ALL_ABILITIES`;

const receiveAllAbilities = abilities => ({
  type: RECEIVE_ALL_ABILITIES,
  abilities,
});

export const requestAllAbilities = () => dispatch => (
  AbilitiesAPIUtils.getAbilities()
    .then(abilities => dispatch(receiveAllAbilities(abilities)))
);
