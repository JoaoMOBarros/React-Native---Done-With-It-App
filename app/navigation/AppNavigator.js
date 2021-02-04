import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import HistoricoScreen from "../screens/HistoricoScreen";
import AccountScreen from "../screens/AccountScreen";

import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "#2FAC10",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "#959595",
    }}
  >
    <Tab.Screen
      name="Início"
      component={FeedNavigator}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size * 1.2} />
        ),
      }}
    />
    <Tab.Screen
      name="Historico"
      component={HistoricoScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="history"
            color={color}
            size={size * 1.2}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Conta"
      component={AccountScreen}
      options={{
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            color={color}
            size={size * 1.2}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
