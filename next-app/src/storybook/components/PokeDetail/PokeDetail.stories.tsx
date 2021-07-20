import PokeDetail from './PokeDetail';
import pokemons from '../../_data_mocks/pokemons';

export default {
  title: '7-Eleven/Components/PokeDetail',
  component: PokeDetail,
}

const Template = (args) => (<PokeDetail {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon: pokemons[1],
};
