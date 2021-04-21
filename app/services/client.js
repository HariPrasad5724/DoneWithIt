import { create } from "apisauce";
import config from "../config/config";
import authStorage from "./authStorage";

const apiClient = create({
  baseURL: config["baseUrl"],
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
