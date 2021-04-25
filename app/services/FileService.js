import config from "../config/config";
import apiClient from "./client";
import authStorage from "./authStorage";

import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { FileSystemUploadType } from "expo-file-system";

const getFiles = async () => {
  try {
    return await apiClient.get(config["filesGetEndPoint"]);
  } catch (error) {
    console.log("Error in getting files from server", Error);
  }
};

const uploadFile2 = async (uri, category, date, filename) => {
  apiClient.post();
  const data = new FormData();
  data.append("category", category);
  data.append("date", date);
  data.append("uri", uri);
  data.append("");

  apiClient.addAsyncRequestTransform((request) => {
    request.headers["filename"] = filename;
  });
};

const uploadFile = async (uri, category, date, filename) => {
  try {
    const authToken = await authStorage.getToken();
    const result = await FileSystem.uploadAsync(
      config["baseUrl"] + config["fileUploadEndPoint"],
      uri,
      {
        headers: {
          Authorization: "Bearer " + authToken,
          "content-type": "multipart/form-data",
          filename: filename,
        },
        fieldName: "file",
        uploadType: FileSystemUploadType.MULTIPART,
        parameters: {
          category,
          date,
        },
      }
    );

    if (result.status === 200) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

const getClassroomFiles = async (classId) => {
  try {
    return await apiClient.get(config["classfilesGetEndPoint"] + classId);
  } catch (error) {
    console.log("Error in getting files from server", Error);
  }
};

const getStudentFiles = async (classId, studId) => {
  try {
    return await apiClient.get(
      config["studentFilesEndPoint"] + classId + "/" + studId
    );
  } catch (error) {
    console.log("Error in getting files from server", Error);
  }
};

const downloadFile = async (file) => {
  try {
    const authToken = await authStorage.getToken();
    const fileUri = `${FileSystem.documentDirectory}${file.filename}`;
    const downloadedFile = await FileSystem.downloadAsync(
      config["baseUrl"] + config["fileDownloadEndPoint"] + file._id,
      fileUri,
      {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      }
    );

    return downloadedFile;
  } catch (error) {
    console.log("Error downloading the file", error);
  }
};

const deleteFiles = async (fileId) => {
  return apiClient.delete(config["fileDeleteEndPoint"] + fileId);
};

const saveFileAsync = async (downloadedFile) => {
  try {
    const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (perm.status != "granted") return;
    const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
    const album = await MediaLibrary.getAlbumAsync("Download");
    if (album == null) {
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    } else {
      await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
    }
    return true;
  } catch (e) {
    console.log("Error saving file in mobile", e);
    return false;
  }
};

export default {
  getClassroomFiles,
  getFiles,
  downloadFile,
  saveFileAsync,
  uploadFile,
  getStudentFiles,
  deleteFiles,
};
