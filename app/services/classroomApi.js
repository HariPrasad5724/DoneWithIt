import config from "../config/config";
import apiClient from "./client";
import authStorage from "./authStorage";

const getClassroom = (classId) =>
  apiClient.get(config["classRoomEndPoint"] + classId);

export default {
  getClassroom,
};
