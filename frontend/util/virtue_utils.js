export const getVirtues = () => (
  $.ajax({
    method: `GET`,
    url: `/api/virtues`,
  })
);

export const getVirtue = id => (
  $.ajax({
    method: `GET`,
    url: `/api/virtues/${id}`,
  })
);