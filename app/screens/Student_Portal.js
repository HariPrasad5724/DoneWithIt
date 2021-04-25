import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReasonODForm from "./ReasonODForm";
import DisplayDocs from "./DisplayDocs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UploadTabButton from "../navigation/UploadTabButton";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "dodgerblue",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      name="Document Screen"
      component={DisplayDocs}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="folder" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Upload"
      component={ReasonODForm}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <UploadTabButton onPress={() => navigation.navigate("Upload")} />
        ),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-circle"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

function Student_Portal(props) {
  return <TabNavigator />;
}

export default Student_Portal;
