import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreens";
import EntregaConcluidaScreen from "../screens/EntregaConcluidaScreen";

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Listings"
        component={ListingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        mode="modal"
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        mode="modal"
        name="EntregaConcluida"
        component={EntregaConcluidaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
