import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreens";

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
