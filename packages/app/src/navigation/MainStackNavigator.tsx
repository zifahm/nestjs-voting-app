import { createStackNavigator, NavigationContainer } from "react-navigation";
import { ROUTES, Stack } from "../types/stack";
import HomeTabNavigator from "./HomeTabNavigator";

const MainStackNavigator = (stack: Stack): NavigationContainer => {
  return createStackNavigator({
    [ROUTES.MainHome]: HomeTabNavigator(stack)
  });
};
export default MainStackNavigator;
