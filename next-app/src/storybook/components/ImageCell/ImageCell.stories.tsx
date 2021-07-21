import ImageCell from './ImageCell';
import DataMocks from '../../_data_mocks/data_mocks';

export default {
  title: '7-Eleven/Components/ImageCell',
  component: ImageCell,
}

const Template = (args) => (<ImageCell {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon: DataMocks.pokemons[9],
};
