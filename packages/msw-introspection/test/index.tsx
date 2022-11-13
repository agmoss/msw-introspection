import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";
import { Rockets } from "./rockets";

//eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Rockets />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
