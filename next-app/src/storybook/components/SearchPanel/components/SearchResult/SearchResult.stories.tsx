import SearchResult from "./SearchResult";
import DataMocks from "../../../../_data_mocks/data_mocks";

export default {
  title: "7-Eleven/Components/SearchPanel/Components/SearchResult",
  component: SearchResult,
};

const Template = (args) => <SearchResult {...args} />;
export const Widget = Template.bind({});
Widget.args = {
  pokemons: DataMocks.pokemons.slice(0, 10),
};
