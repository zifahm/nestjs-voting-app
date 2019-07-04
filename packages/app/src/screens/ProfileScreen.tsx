import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationScreenComponent,
  NavigationTabScreenOptions
} from "react-navigation";

const ProfileScreen: NavigationScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profile Screen</Text>
    </View>
  );
};
ProfileScreen.navigationOptions = (): NavigationTabScreenOptions => ({
  title: "Profile"
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

export default ProfileScreen;
