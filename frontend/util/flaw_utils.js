export const getFlaws = () => (
  $.ajax({
    method: `GET`,
    url: `/api/flaws`,
  })
);

export const getFlaw = id => (
  $.ajax({
    method: `GET`,
    url: `/api/flaws/${id}`,
  })
);