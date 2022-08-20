import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (name, email, password) => (dispatch) => {
  return AuthService.register(name, email, password)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.error,
      });
    });
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.error,
      });
    });
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
