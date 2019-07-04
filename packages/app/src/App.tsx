import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import RootContainer from "./navigation/RootContainer";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootContainer />
    </ApolloProvider>
  );
}
