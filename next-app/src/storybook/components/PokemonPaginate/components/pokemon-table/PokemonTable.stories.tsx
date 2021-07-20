import PokemonTable from "./PokemonTable";
import DataMocks from '../../../../_data_mocks/pokemons';
export default {
  title: "7-Eleven/Components/PokemonPaginate/Components/PokemonTable",
  component: PokemonTable,
}

const Template = (args) => (<PokemonTable {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemons: DataMocks.pokemons,
}