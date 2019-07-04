import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationDrawerScreenOptions,
  NavigationScreenComponent
} from "react-navigation";
import { ROUTES } from "../types/stack";

const LoginScreen: NavigationScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate(ROUTES.RootApp)}
      />
    </View>
  );
};

LoginScreen.navigationOptions = (): NavigationDrawerScreenOptions => ({
  title: "Login"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    margin: 10
  }
});

export default LoginScreen;
