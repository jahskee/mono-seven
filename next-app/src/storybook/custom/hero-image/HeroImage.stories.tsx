import React from 'react';
import HeroImage from './HeroImage';

export default {
  title: '7Eleven/HeroImage',
  component: HeroImage,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<HeroImage {...args} />);
export const Default = Template.bind({});
Default.args = {}
