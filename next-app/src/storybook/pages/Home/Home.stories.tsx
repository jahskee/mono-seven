import Home from './Home';

export default {
  title: '7-Eleven/Pages/Home',
  component: Home,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<Home {...args} />);
export const Widget = Template.bind({});
Widget.args = {}
