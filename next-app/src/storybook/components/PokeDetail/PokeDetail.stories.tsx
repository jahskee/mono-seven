import PokeDetail from './PokeDetail';
import pokemons from '../../../_data/data_pokemon';

export default {
  title: '7-Eleven/Components/PokeDetail',
  component: PokeDetail,
}

const Template = (args) => (<PokeDetail {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon: pokemons[1],
};
