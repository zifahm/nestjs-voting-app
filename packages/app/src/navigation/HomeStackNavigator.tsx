import { createStackNavigator, NavigationContainer } from "react-navigation";
import { Stack } from "../types/stack";
import HomeTabNavigator from "./HomeTabNavigator";

const HomeStackNavigator = (stack: Stack): NavigationContainer => {
  return createStackNavigator({
    Home: HomeTabNavigator(stack)
  });
};
export default HomeStackNavigator;
