import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Pokemon @key(fields: "id"){
    id: String!
    name: String!
    url: String!
  }
  extend type Query {
    pokemon(id: ID!): Pokemon
    pokemons: [Pokemon!]!
    allPokemons: [Pokemon!]!
  }
`;

export default typeDefs;