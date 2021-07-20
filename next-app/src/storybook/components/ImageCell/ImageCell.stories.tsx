import ImageCell from './ImageCell';
import pokemons from '../../../_data/data_pokemon';

export default {
  title: '7-Eleven/Components/ImageCell',
  component: ImageCell,
}

const Template = (args) => (<ImageCell {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon: pokemons[9],
};
