import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createStackNavigator, NavigationContainer } from "react-navigation";
import { ROUTES, Stack } from "../types/stack";
import HomeTabNavigator from "./HomeTabNavigator";

const MainStackNavigator = (stack: Stack): NavigationContainer => {
  return createStackNavigator(
    {
      [ROUTES.MainHome]: HomeTabNavigator(stack)
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Ionicons
            name="md-menu"
            size={30}
            style={{ padding: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      })
    }
  );
};
export default MainStackNavigator;
