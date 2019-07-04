import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationScreenComponent,
  NavigationTabScreenOptions
} from "react-navigation";

const PollScreen: NavigationScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Poll Screen</Text>
    </View>
  );
};

PollScreen.navigationOptions = (): NavigationTabScreenOptions => ({
  title: "Poll"
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

export default PollScreen;
