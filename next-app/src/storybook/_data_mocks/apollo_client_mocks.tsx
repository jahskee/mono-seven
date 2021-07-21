import Queries from "./apollo_client_queries";
import DataMocks from "./data_mocks";

function getPagedPokemons() {
  const request = {
    query: Queries.GET_PAGED_POKEMONS,
    variables: {
      offset: 0,
      limit: 10,
    },
  };

  const result = {
    data: {
      pagedPokemons: DataMocks.pokemons.slice(0, 10),
    },
  };
  return { request, result };
}

export const apolloClientMocks = {
  mocks: [getPagedPokemons()],
};
