import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import NavigationTheme from "./app/navigation/NavigationTheme";

// IMPORT NAVIGATORS

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "green",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={LoginScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Setting" component={AccountScreen} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="RegisterScreen"
    screenOptions={{
      headerStyle: { backgroundColor: "green" },
      headerTintColor: "white",
      headerShown: true,
    }}
  >
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title: "Register Screen",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      {/* <StackNavigator /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
