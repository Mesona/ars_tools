import * as VirtuesAPIUtils from '../util/virtue_utils';

export const RECEIVE_ALL_VIRTUES = 'RECEIVE_ALL_VIRTUES';
export const RECEIVE_VIRTUE = 'RECEIVE_VIRTUE';

const receiveAllVirtues = virtues => ({
  type: RECEIVE_ALL_VIRTUES,
  virtues,
});

const receiveVirtue = virtue => ({
  type: RECEIVE_VIRTUE,
  virtue,
});

export const requestAllVirtues = () => dispatch => (
  VirtuesAPIUtils.getVirtues()
    .then(virtues => dispatch(receiveAllVirtues(virtues)))
);

export const requestVirtue = id => dispatch => (
  VirtuesAPIUtils.getVirtue(id)
    .then(virtue => dispatch(receiveVirtue(virtue)))
);