# `msw-introspection` [![NPM](https://img.shields.io/npm/v/msw-introspection?style=for-the-badge)](https://www.npmjs.com/package/msw-introspection)

> Default mocked responses from a graphql query via msw and graphql introspection

## createIntrospectionHandler

> (introspection) -> (req,res,ctx) -> MockedResponse

Creates a msw handler for GraphQL operations. The handler returns mocked data that conforms to the schema types

## Implementation

Setup mocks

```typescript
import { graphql } from "msw";
import { createIntrospectionHandler } from "msw-introspection";
import introspection from "../../graphql/introspection.json";

const introspectionHandler = createIntrospectionHandler(introspection);

const handlers = [graphql.operation(introspectionHandler)];

export const server = setupServer(...handlers);
```

Setup Jest

```typescript
import "@testing-library/jest-dom/extend-expect";
import { client } from "./ApolloClient";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  return client.clearStore();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
```

## Testing

The testing for this library illustrates how to use MSW to mock a GQL API and get default responses from an introspected schema. The schema used for testing is provided by the [SpaceX GraphQL API](https://api.spacex.land/graphql).

```bash
npm run download:schema
```

The `/test` directory sets up an ApolloClient instance, a React component that calls `useQuery`, and the utilities that set up the msw server.

```bash
├── test
│   ├── graphql
│   │   ├── introspection.json # Output of graphql-codegen
│   │   ├── schema.gql # Schema downloaded from SpaceX API
│   │   ├── types.d.ts # Output of graphql-codegen
│   ├── mocks # MSX code
│   ├── ApolloClient.ts # An instance of apollo client
│   ├── codegen.yml # Generate ts types and introspection from graphql schema
│   ├── index.test.tsx # Test suite
│   ├── rockets.tsx # Simple react component that makes a useQuery call.
│   ├── setupTests.ts # Enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
```
