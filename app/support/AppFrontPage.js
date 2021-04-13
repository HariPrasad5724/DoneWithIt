import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlightComponent,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppFrontPage(props) {
  return (
    <>
      <TouchableHighlightComponent
        style={styles.container}
        onPress={() => props.navigation.navigate("Welcome")}
      >
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={20} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={20}
          />
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/CITFront.jpg")}
        />
      </TouchableHighlightComponent>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default AppFrontPage;
