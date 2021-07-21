import PokeDetail from './PokeDetail';
import DataMocks from '../../_data_mocks/data_mocks';

export default {
  title: '7-Eleven/Components/PokeDetail',
  component: PokeDetail,
}

const Template = (args) => (<PokeDetail {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon: DataMocks.pokemons[1],
};
