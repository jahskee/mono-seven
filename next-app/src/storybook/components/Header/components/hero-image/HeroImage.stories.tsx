import React from 'react';
import HeroImage from './HeroImage';

export default {
  title: '7-Eleven/Components/Header/Components/HeroImage',
  component: HeroImage,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<HeroImage {...args} />);
export const Widget = Template.bind({});
Widget.args = {}
