import PokemonPaginate from './PokemonPaginate';
import Queries from '../../_queries/queries';
import DataMocks from '../../_data_mocks/pokemons';

export default {
  title: "7-Eleven/Components/PokemonPaginate",
  component: PokemonPaginate,
}

const Template = (args) => (<PokemonPaginate {...args} />);
export const Widget = Template.bind({});
Widget.args = {};

Widget.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: Queries.GET_PAGED_POKEMONS,
          variables: {
            offset:0,
            limit:10,
          }
        },
        result: {
          data: {
            pagedPokemons: DataMocks.pokemons.slice(0,10),
          },
        },
      },
    ],
  },
};