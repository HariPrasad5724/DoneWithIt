import * as SecureStore from "expo-secure-store";

const key = "authtoken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth Token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting the auth token", error);
  }
};

export default { getToken, storeToken, removeToken };
