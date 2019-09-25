export const RECEIVE_VIRTUE = `RECEIVE_VIRTUE`;
export const RECEIVE_VIRTUES = `RECEIVE_VIRTUES`;
export const RECEIVE_FLAW = `RECEIVE_FLAW`;
export const RECEIVE_FLAWS = `RECEIVE_FLAWS`;

const receiveVirtue = virtue => ({
  type: RECEIVE_VIRTUE,
  virtue,
});

const receiveVirtues = virtues => ({
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
  receiveVirtue(virtue)
);

export const storeVirtues = virtues => (
  receiveVirtues(virtues)
);

export const storeFlaw = flaw => (
  receiveFlaw(flaw)
);

export const storeFlaws = flaws => (
  receiveFlaws(flaws)
);