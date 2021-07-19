import PokeDetail from './PokeDetail';

export default {
  title: '7-Eleven/Components/PokeDetail',
  component: PokeDetail,
}

const Template = (args) => (<PokeDetail {...args} />);
export const Widget = Template.bind({});
Widget.args = {
  pokemon = {
    id: "61",
    name: "Pokemon1",
    height: "159",
    weight: "6.0",
    order: "24",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
  }
};
