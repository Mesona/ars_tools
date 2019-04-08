
export const getUsers = () => (
  $.ajax({
    method: `GET`,
    url: '/api/users',
  })
);

export const getUser = id => (
  $.ajax({
    method: `GET`,
    url: `/api/users/${id}`,
  })
);

export const postUser = user => (
  $.ajax({
    method: `POST`,
    url: `/api/users`,
    data: { user }
  })
);

export const patchUser = user => (
  $.ajax({
    method: `POST`,
    url: `/api/user/${user.id}`,
    data: { user }
  })
);

export const deleteUser = () => (
  $.ajax({
    method: `DELETE`,
    url: `/api/user`,
  })
);