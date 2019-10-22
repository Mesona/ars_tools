export const RECEIVE_VIRTUE = `RECEIVE_CHARACTER_VIRTUE`;
export const REMOVE_VIRTUE = `REMOVE_CHARACTER_VIRTUE`;
export const RECEIVE_VIRTUES = `RECEIVE_CHARACTER_VIRTUES`;
export const RECEIVE_FLAW = `RECEIVE_CHARACTER_FLAW`;
export const REMOVE_FLAW = `REMOVE_CHARACTER_FLAW`;
export const RECEIVE_FLAWS = `RECEIVE_CHARACTER_FLAWS`;

const receiveVirtue = virtue => ({
  type: RECEIVE_VIRTUE,
  virtue,
});

const removeVirtue = virtue => ({
  type: REMOVE_VIRTUE,
  virtue,
});

const receiveAllVirtues = (virtues) => ({
  type: RECEIVE_VIRTUES,
  virtues,
});

const receiveFlaw = flaw => ({
  type: RECEIVE_FLAW,
  flaw,
});

const removeFlaw = flaw => ({
  type: REMOVE_FLAW,
  flaw,
});

const receiveAllFlaws = flaws => ({
  type: RECEIVE_FLAWS,
  flaws,
});

export const storeVirtue = virtue => (
  receiveVirtue(virtue)
);

export const deleteVirtue = virtue => (
  removeVirtue(virtue)
);

export const storeVirtues = (virtues) => (
  receiveAllVirtues(virtues)
);

export const storeFlaw = flaw => (
  receiveFlaw(flaw)
);

export const deleteFlaw = flaw => (
  removeFlaw(flaw)
);

export const storeFlaws = flaws => (
  receiveAllFlaws(flaws)
);