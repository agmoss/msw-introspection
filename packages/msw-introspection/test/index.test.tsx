import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";
import { Rockets } from "./rockets";

it("renders without error", async () => {
  render(
    <ApolloProvider client={client}>
      <Rockets />
    </ApolloProvider>
  );
  expect(await screen.findByText("Loading...")).toBeVisible();
});

it("renders data", async () => {
  render(
    <ApolloProvider client={client}>
      <Rockets />
    </ApolloProvider>
  );
  expect(await screen.findByText("Data")).toBeVisible();
});


it("string should be default as per mock data", async () => {
  render(
    <ApolloProvider client={client}>
      <Rockets />
    </ApolloProvider>
  );
  expect((await screen.findByTestId("launchSiteName0")).textContent).toBe("Launch Site: msw-introspection")
});