
export const getCharacters = (userId) => (
  $.ajax({
    method: `GET`,
    url: `/api/users/${userId}/characters`,
  })
);

export const getCharacter = id => (
  $.ajax({
    method: `GET`,
    url: `/api/characters/${id}`,
  })
);

export const postCharacter = character => (
  $.ajax({
    method: `POST`,
    url: `/api/characters`,
    data: { character }
  })
);

export const patchCharacter = character => (
  $.ajax({
    method: `PATCH`,
    url: `/api/characters/${character.id}`,
    data: { character }
  })
);

export const deleteCharacter = id => (
  $.ajax({
    method: `DELETE`,
    url: `/api/characters/${id}`,
  })
);