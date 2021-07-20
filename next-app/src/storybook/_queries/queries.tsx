import { gql } from "@apollo/client";

export const GET_PAGED_POKEMONS = gql`
query getPagedPokemons($offset: Int, $limit: Int) {
  pagedPokemons(offset: $offset, limit: $limit) {
    id
    name
    weight
    accuracy
    power
    generation
    xp
    image
  }
}
`;

export default {
  GET_PAGED_POKEMONS,
}