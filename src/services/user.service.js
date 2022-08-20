import { _get } from "./api.service";

const getAllUsers = () => {
  return _get("users/get_all_users");
};

export default {
  getAllUsers,
};
