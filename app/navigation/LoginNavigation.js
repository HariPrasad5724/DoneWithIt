import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import ReasonODForm from "../screens/ReasonODForm";
import ListClasses from "../screens/ListClasses";
import Login from "../screens/Login";
import Student_Portal from "../screens/Student_Portal";
import Staff_Portal from "../screens/Staff_Portal";
import ListStudents from "../screens/ListStudents";
import DisplayDocs from "../screens/DisplayDocs";
import ListUserDocs from "../screens/ListUserDocs";
import ForgotPassword from "../screens/ForgotPassword";
import NavigationTheme from "./NavigationTheme";
import ProfileScreen from "../screens/ProfileScreen";
import StaffHome from "../screens/StaffHome";
const Stack = createStackNavigator();

export default function LoginNavigation(props) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="OD_Form" component={ReasonODForm} />
        <Stack.Screen name="Display_Class" component={ListClasses} />
        <Stack.Screen name="Student_Portal" component={Student_Portal} />
        <Stack.Screen name="Staff_Portal" component={Staff_Portal} />
        <Stack.Screen name="DisplayDocs" component={DisplayDocs} />
        <Stack.Screen name="ListStudents" component={ListStudents} />
        <Stack.Screen name="ListUserDocs" component={ListUserDocs} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="My_Profile" component={ProfileScreen} />
        <Stack.Screen name="Staff_Home" component={StaffHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
