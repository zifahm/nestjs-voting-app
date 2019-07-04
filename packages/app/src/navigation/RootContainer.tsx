import { createBrowserApp } from "@react-navigation/web";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { ROUTES } from "../types/stack";
import AppStack from "./AppStack";
import UnAuthStack from "./UnAuthStack";

const RootContainer = Platform.select({
  web: (config: any) => createBrowserApp(config, { history: "hash" }),
  default: (config: any) => createAppContainer(config)
});

export default RootContainer(
  createSwitchNavigator({
    [ROUTES.RootUnAuth]: UnAuthStack,
    [ROUTES.RootApp]: AppStack
  })
);
