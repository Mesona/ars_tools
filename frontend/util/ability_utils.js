export const getAbilities = () => (
  $.ajax({
    method: `GET`,
    url: '/api/abilities',
  })
);
