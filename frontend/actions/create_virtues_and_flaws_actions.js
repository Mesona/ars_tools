export const RECEIVE_VIRTUE = `RECEIVE_VIRTUE`;
export const RECEIVE_VIRTUES = `RECEIVE_VIRTUES`;
export const RECEIVE_FLAW = `RECEIVE_FLAW`;
export const RECEIVE_FLAWS = `RECEIVE_FLAWS`;

const receiveVirtue = virtue => ({
  type: RECEIVE_VIRTUE,
  virtue,
});

// const receiveAllVirtues = () => ({
//   type: RECEIVE_VIRTUES,
//   virtues,
// });

const receiveAllVirtues = (virtues) => ({
  type: RECEIVE_VIRTUES,
  virtues,
});

const receiveFlaw = flaw => ({
  type: RECEIVE_FLAW,
  flaw,
});

const receiveFlaws = flaws => ({
  type: RECEIVE_FLAWS,
  flaws,
});

export const storeVirtue = virtue => (
  dispatch(receiveVirtue(virtue))
);

export const storeVirtues = (virtues) => (
  dispatch(receiveAllVirtues(virtues))
);

export const storeFlaw = flaw => (
  dispatch(receiveFlaw(flaw))
);

export const storeFlaws = flaws => (
  dispatch(receiveFlaws(flaws))
);