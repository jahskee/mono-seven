import React from 'react';
import AppBar7 from './TopMenuBar';

export default {
  title: '7-Eleven/Components/Header/Components/TopMenuBar',
  component: AppBar7,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<AppBar7 {...args} />);
export const Widget = Template.bind({});
Widget.args = {}
