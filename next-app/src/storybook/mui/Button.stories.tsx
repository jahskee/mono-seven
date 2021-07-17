import React from 'react';
import { Button } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material-UI/Button',
  component: Button,
  argTypes: {
    color: {
      defaultValue: 'primary',
      options: ['default', 'primary', 'secondary'],
      control: { type: 'radio' },
    },
    variant: {
      defaultValue: 'contained',
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio'},
    },
    fullWidth: {
      defaultValue: false,
      options: [ true, false],
      control: { type: 'radio' },
      description: "dfsd",
    },
    onClick: {
      control: { type: 'function'}
    }
  }
};

const Template = (args) => (<Button {...args} />);
export const Default = Template.bind({});
Default.args = {
  color: 'default',
  variant: 'contained',
  children: 'Default',
  onClick: action('Default button clicked'),
}

export const Primary = () => (
  <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
    Secondary
  </Button>
);


