import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Pokemon @key(fields: "id"){
    id: String!
    name: String!
    weight: String
    accuracy: String
    power: String
    generation: String
    xp: String
    image: String!
  }
  extend type Query {
    pokemon(id: ID!): Pokemon!
    pokemonPage(offset: Int, limit: Int): [Pokemon]
    pokemons: [Pokemon!]!
    allPokemons: [Pokemon!]!
  }
`;

export default typeDefs;