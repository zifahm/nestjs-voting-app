import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation/AppContainer";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
