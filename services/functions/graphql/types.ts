import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type TokenAuth {
    user: User
    token: String
  }

  type User {
    id: String!
    first_name: String!
    username: String!
    language: String!
    isStaff: Boolean
  }
`;
