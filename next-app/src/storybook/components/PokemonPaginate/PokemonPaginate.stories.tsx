import PokemonPaginate from './PokemonPaginate';
import { apolloClientMocks } from '../../_data_mocks/apollo_client_mocks';

export default {
  title: "7-Eleven/Components/PokemonPaginate",
  component: PokemonPaginate,
}

const Template = (args) => (<PokemonPaginate {...args} />);
export const Widget = Template.bind({});
Widget.args = {};

Widget.parameters = {
  apolloClient: apolloClientMocks,
};