import axios from "axios";
const API_URL = "http://localhost:4000/api/";
import { _post } from "./api.service";
const register = (name, email, password) => {
  return _post(`${API_URL}/user/register`, {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return _post(`${API_URL}/user/login`, {
    email,
    password,
  })
    .then((response) => {
      if (response.data.status === 200) {
        localStorage.setItem("token", response.data.token);
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
