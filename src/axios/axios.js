import * as _axios from "axios";

const baseURL = "http://localhost:4000/api/";
const axios = _axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axios;
