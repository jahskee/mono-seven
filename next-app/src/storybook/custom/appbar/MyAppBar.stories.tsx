import React from 'react';
import { Button } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import MyAppBar from './MyAppBar';

export default {
  title: '7Eleven/MyAppBar',
  component: MyAppBar,
  args: {  // default values
  
  },
  argTypes: {
  
  }
};

const Template = (args) => (<MyAppBar {...args} />);
export const Default = Template.bind({});
Default.args = {
 
  onClick: action('Default button clicked'),
}
