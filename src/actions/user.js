import { GET_USERS_FAIL, GET_USERS_SUCCESS } from "./types";
import UserService from "../services/user.service";

export const getAllUsers = () => {
  return UserService.getAllUsers()
    .then((response) => {
      return {
        type: GET_USERS_SUCCESS,
        payload: response.data,
      };
    })
    .catch((error) => {
      return {
        type: GET_USERS_FAIL,
        payload: error.response.data.error,
      };
    });
};
