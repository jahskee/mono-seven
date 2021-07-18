import SearchPanel from './SearchPanel';

export default {
  title: "7-Eleven/Components/SearchPanel",
  component: SearchPanel,
}

const Template = (args) => (<SearchPanel {...args} />);
export const Widget = Template.bind({});

Widget.args = {};