import { ApolloServer } from "apollo-server-lambda";

import * as query from "./graphql/query";
import * as mutation from "./graphql/mutation";
import * as types from "./graphql/types";

const typeDefs = [query.typeDefs, mutation.typeDefs, types.typeDefs];

const resolvers = {
  Query: {
    ...query.resolvers,
  },
  Mutation: {
    ...mutation.resolvers,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !!process.env.IS_LOCAL,
});

export const handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: "*",
      credentials: true,
    },
  },
});
