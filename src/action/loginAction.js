import * as types from '../config/actionTypes';

export const loginRequest = (username) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: username,
  }
};

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});

export const loginFail = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error
})

export const logout = () => ({
  type: types.LOGOUT
})