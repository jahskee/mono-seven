import React from 'react';
import AppBar7 from './AppBar7';

export default {
  title: '7-Eleven/components/AppBar7',
  component: AppBar7,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<AppBar7 {...args} />);
export const Widget = Template.bind({});
Widget.args = {}
