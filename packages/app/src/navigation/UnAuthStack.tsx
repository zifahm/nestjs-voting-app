import { createDrawerNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { ROUTES } from "../types/stack";
import MainStackNavigator from "./MainStackNavigator";

const UnAuthStack = createDrawerNavigator({
  [ROUTES.UnAuthMain]: {
    screen: MainStackNavigator(ROUTES.RootUnAuth),
    navigationOptions: () => ({
      title: "Home"
    })
  },
  [ROUTES.UnAuthLogin]: LoginScreen,
  [ROUTES.UnAuthSignup]: SignupScreen
});

export default UnAuthStack;
