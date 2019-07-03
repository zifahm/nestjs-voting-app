import { createBrowserApp } from "@react-navigation/web";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const AppContainer = Platform.select({
  web: (config: any) => createBrowserApp(config, { history: "hash" }),
  default: (config: any) => createAppContainer(config)
});

export default AppContainer(
  createSwitchNavigator({
    UnAuth: LoginScreen,
    App: SignupScreen
  })
);
