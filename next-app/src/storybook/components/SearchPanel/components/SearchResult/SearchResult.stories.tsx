import SearchResult from "./SearchResult";
import pokemons from '../../../../_data_mocks/pokemons';

export default {
  title: "7-Eleven/Components/SearchPanel/Components/SearchResult",
  component: SearchResult,
}

const Template = (args) => (<SearchResult {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemons
};