import React, { useEffect, useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerApp() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we want camera roll permissions to make this App work!");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <View style={{ paddingTop: 50 }}>
      <Button title="Select the Document" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ height: 20, width: 20 }} />
    </View>
  );
}
