import SearchResult from "./SearchResult";

export default {
  title: "7-Eleven/Components/SearchPanel/Components/SearchResult",
  component: SearchResult,
}

const Template = (args) => (<SearchResult {...args} />);
export const Widget = Template.bind({});

const rows = [
  { id: '61', name: 'Pokemon1', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon2', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon3', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon4', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon5', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon6', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon7', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon8', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon9', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Pokemon10', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
];

Widget.args = {
  rows,
};