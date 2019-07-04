import { createDrawerNavigator } from "react-navigation";
import { ROUTES } from "../types/stack";
import MainStackNavigator from "./MainStackNavigator";

const AppStack = createDrawerNavigator({
  [ROUTES.AppMain]: {
    screen: MainStackNavigator(ROUTES.RootApp),
    navigationOptions: () => ({
      title: "Home"
    })
  }
});
export default AppStack;
