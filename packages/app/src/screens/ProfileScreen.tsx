import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenComponent } from "react-navigation";

const ProfileScreen: NavigationScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profile Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("App")} />
    </View>
  );
};

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
