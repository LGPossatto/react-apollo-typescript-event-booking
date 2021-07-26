import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./assets/styles/globals.style.scss";
import "./assets/styles/components.style.scss";
import App from "./App.component";
import UserState from "./context/user/UserState";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserState>
  </ApolloProvider>,
  document.getElementById("root")
);
