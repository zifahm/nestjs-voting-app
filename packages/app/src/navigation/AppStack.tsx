import React from "react";
import { Button, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerItemsProps,
  SafeAreaView,
  ScrollView
} from "react-navigation";
import { ROUTES } from "../types/stack";
import MainStackNavigator from "./MainStackNavigator";

const CustomDrawerContentComponent = (props: DrawerItemsProps) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate(ROUTES.RootUnAuth)}
      />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const AppStack = createDrawerNavigator(
  {
    [ROUTES.AppMain]: {
      screen: MainStackNavigator(ROUTES.RootApp),
      navigationOptions: () => ({
        title: "Home"
      })
    }
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);
export default AppStack;
