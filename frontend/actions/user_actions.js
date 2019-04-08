import * as UsersAPIUtils from '../util/user_utils';

export const RECEIVE_ALL_USERS = `RECEIVE_ALL_USERS`;
export const RECEIVE_USER = `RECEIVE_USER`;

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users,
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestAllUsers = () => dispatch => (
  UsersAPIUtils.getUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);

export const requestUser = id => dispatch => (
  UsersAPIUtils.getUser(id)
    .then(user => dispatch(receiveUser(user)))
);