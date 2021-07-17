import React from 'react';
import MyAppBar from './MyAppBar';

export default {
  title: '7-Eleven/components/MyAppBar',
  component: MyAppBar,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<MyAppBar {...args} />);
export const Default = Template.bind({});
Default.args = {}
