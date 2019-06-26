import * as FlawsAPIUtils from '../util/flaw_utils';

export const RECEIVE_ALL_FLAWS = 'RECEIVE_ALL_FLAWS';
export const RECEIVE_FLAW = 'RECEIVE_FLAW';

const receiveAllFlaws = flaws => ({
  type: RECEIVE_ALL_FLAWS,
  flaws,
});

const receiveFlaw = flaw => ({
  type: RECEIVE_FLAW,
  flaw,
});

export const requestAllFlaws = () => dispatch => (
  FlawsAPIUtils.getFlaws()
    .then(flaws => dispatch(receiveAllFlaws(flaws)))
);

export const requestFlaw = id => dispatch => (
  FlawsAPIUtils.getFlaw(id)
    .then(flaw => dispatch(receiveFlaw(flaw)))
);