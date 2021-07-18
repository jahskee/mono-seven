import SearchBox from './SearchBox'

export default {
  title: "7-Eleven/Components/SearchBox",
  component: SearchBox,
}

const Template = (args) => (<SearchBox {...args} />);

export const Widget = Template.bind({});
Widget.args = {};