import Table7 from './PokemonPaginate';
import './PokemonPaginate.modules.css';

export default {
  title: "7-Eleven/Components/PokemonPaginate",
  component: Table7,
}

const Template = (args) => (<Table7  {...args} />);
export const Widget = Template.bind({});
Widget.args = {};