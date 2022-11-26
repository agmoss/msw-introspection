import { graphql } from "msw";
import { createIntrospectionHandler } from "../../index";
import introspection from "../../graphql/introspection.json";

const introspectionHandler = createIntrospectionHandler({String: () => "msw-introspection" })(introspection);

export const handlers = [graphql.operation(introspectionHandler)];
