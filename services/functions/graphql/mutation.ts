import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Mutation {
    addCount(count: Int): Int
  }
`;

export const resolvers = {
  addCount: (_: any, { count }: { count: number }) => count + 1,
};
