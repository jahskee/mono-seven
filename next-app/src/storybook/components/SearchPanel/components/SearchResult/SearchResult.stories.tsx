import SearchResult from "./SearchResult";

export default {
  title: "7-Eleven/Components/SearchPanel/Components/SearchResult",
  component: SearchResult,
}

const Template = (args) => (<SearchResult {...args} />);
export const Widget = Template.bind({});
Widget.args = {};