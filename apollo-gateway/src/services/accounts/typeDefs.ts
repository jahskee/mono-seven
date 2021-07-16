import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Account @key(fields: "id"){
    id: ID!
    name: String
    email: String
  }
  extend type Query {
    hello: String
    account(id: ID!): Account!
    accounts: [Account]
  }
`;

export default typeDefs;