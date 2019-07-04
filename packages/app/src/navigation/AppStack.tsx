import { createDrawerNavigator } from "react-navigation";
import { ROUTES } from "../types/stack";
import MainStackNavigator from "./MainStackNavigator";

const AppStack = createDrawerNavigator({
  [ROUTES.AppMain]: MainStackNavigator(ROUTES.RootApp)
});
export default AppStack;
