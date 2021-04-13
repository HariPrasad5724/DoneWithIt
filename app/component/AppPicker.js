import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";
function AppPicker(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {props.icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={20}
              color="black"
              name={props.icon}
            />
          )}
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.textApp}>
              {props.selectedItem
                ? props.selectedItem.label
                : props.placeholder}
            </Text>
          </View>
          <View>
            {props.icon && (
              <MaterialCommunityIcons
                size={20}
                color="black"
                name="chevron-down"
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={props.items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  props.onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 10,
    marginVertical: 20,
  },
  icon: {
    marginRight: 10,
    marginTop: 10,
  },
  textInput: {
    fontSize: 18,
    borderBottomColor: "black",
    color: "black",
  },
  textApp: {
    fontSize: 20,
    paddingVertical: 10,
    color: "gray",
  },
});
export default AppPicker;
