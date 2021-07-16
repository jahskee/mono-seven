import { gql } from "apollo-server-express";

const typeDefs = gql`

  extend type Account @key(fields: "id") {
    id: ID! @external
    name: String @external
  }

  type Organization @key(fields: "id"){
    id: ID!
    name: String!
    fieldCount: Int!
    farmCount: Int!
    accounts: [Account]  @provides(fields: "name")
  }
  extend type Query {
    organization(id: ID!): Organization!
    organizations: [Organization!]!
    allOrganizations: [Organization!]!
  }
`;

export default typeDefs;