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
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();

export default function LoginNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="OD_Form" component={ReasonODForm} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Display_Class" component={ListClasses} />
        <Stack.Screen name="Student_Portal" component={Student_Portal} />
        <Stack.Screen name="Staff_Portal" component={Staff_Portal} />
        <Stack.Screen name="DisplayDocs" component={DisplayDocs} />
        <Stack.Screen name="ListStudents" component={ListStudents} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
