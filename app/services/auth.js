import config from "../config/config";
import apiClient from "./client";

const login = (loginInfo) => apiClient.post(config["loginEndPoint"], loginInfo);

export default {
  login,
};
