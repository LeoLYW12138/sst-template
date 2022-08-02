import { gql } from "apollo-server-lambda";
import { tokenAuth } from "functions/baserow";

export const typeDefs = gql`
  type Query {
    hello: String!
    tokenAuth: TokenAuth!
  }
`;

export const resolvers = {
  hello: () => "Hello, World!",
  tokenAuth,
};
