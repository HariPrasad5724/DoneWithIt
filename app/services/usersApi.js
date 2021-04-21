import config from "../config/config";
import apiClient from "./client";
import authStorage from "./authStorage";

const getUsers = () => apiClient.get(config["userEndPoint"]);

export default {
  getUsers,
};
