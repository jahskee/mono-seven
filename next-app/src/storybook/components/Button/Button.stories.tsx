import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Basic/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: 'Primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  color: "primary",
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  color: "primary",
  label: 'Small',
};