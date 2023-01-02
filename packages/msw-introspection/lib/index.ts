import { graphql } from "msw";
import {
  buildClientSchema,
  execute,
  GraphQLSchema,
  IntrospectionQuery,
} from "graphql";
import { addMocksToSchema } from "@graphql-tools/mock";
import { gql } from "@apollo/client";
import { compose } from "ramda";

type MockT = Parameters<typeof addMocksToSchema>[0]["mocks"];

/**
 * @see https://graphql.org/learn/introspection/
 */
const createIntrospectionSchema = (introspection: unknown) =>
  buildClientSchema(introspection as IntrospectionQuery);

const createMockedSchema =
  (mocks?: MockT) => (introspectionSchema: GraphQLSchema) =>
    addMocksToSchema({ schema: introspectionSchema, mocks: mocks });

const gqlMockedSchemaHandler =
  (mockedSchema: GraphQLSchema) =>
  async (
    ...[req, res, context]: Parameters<Parameters<typeof graphql.query>[1]>
  ) => {
    const { query, variables } = req.body
      ? { query: req.body.query, variables: req.body.variables }
      : { query: null, variables: null };

    const result = await execute({
      schema: mockedSchema,
      document: gql`
        ${query}
      `,
      rootValue: null,
      contextValue: null,
      variableValues: variables,
    });
    return result.data
      ? res(context.data(result.data))
      : res(context.errors(result.errors));
  };

/**
 * @name createIntrospectionHandler
 * @description Construct a msw graphql handler with an introspection for default mocked responses
 */
export const createIntrospectionHandler = (mocks?: MockT) =>
  compose(
    gqlMockedSchemaHandler,
    createMockedSchema(mocks),
    createIntrospectionSchema
  );
