import { createDrawerNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const UnAuthStack = createDrawerNavigator({
  Home: HomeStackNavigator("UnAuth"),
  Login: LoginScreen,
  Signup: SignupScreen
});

export default UnAuthStack;
