import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import "cross-fetch/polyfill";
const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://api.spacex.land/graphql",
});

export const client = new ApolloClient({
  cache,
  link,
});
