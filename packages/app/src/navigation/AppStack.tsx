import { createDrawerNavigator } from "react-navigation";
import HomeStackNavigator from "./HomeStackNavigator";

const AppStack = createDrawerNavigator({
  Home: HomeStackNavigator("App")
});
export default AppStack;
