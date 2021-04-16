import React from "react";
import ReasonODForm from "../screens/ReasonODForm";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListClasses from "../screens/ListClasses";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Staff_Login from "../screens/Staff_Login";
import Student_Login from "../screens/Student_Login";
import Student_Portal from "../screens/Student_Portal";
import PersonalDocs from "../screens/PersonalDocs";
import Staff_Portal from "../screens/Staff_Portal";
import SearchStudent from "../screens/SearchStudent";
import ListStudents from "../screens/ListStudents";
import DisplayDocs from "../screens/DisplayDocs";

const Stack = createStackNavigator();

export default function LoginNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OD_Form" component={ReasonODForm} />
        <Stack.Screen name="Student_Login" component={Student_Login} />
        <Stack.Screen name="Staff_Login" component={Staff_Login} />
        <Stack.Screen name="Display_Class" component={ListClasses} />
        <Stack.Screen name="Student_Portal" component={Student_Portal} />
        <Stack.Screen name="Staff_Portal" component={Staff_Portal} />
        <Stack.Screen name="Personal_Docs" component={PersonalDocs} />
        <Stack.Screen name="DisplayDocs" component={DisplayDocs} />
        <Stack.Screen name="Search_Student" component={SearchStudent} />
        <Stack.Screen name="ListStudents" component={ListStudents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
