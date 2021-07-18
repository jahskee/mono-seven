import PokeDetail from './PokeDetail';

export default {
  title: '7-Eleven/Components/PokeDetail',
  component: PokeDetail,
}

const Template = (args) => (<PokeDetail {...args} />);
export const Widget = Template.bind({});
Widget.args = {};
