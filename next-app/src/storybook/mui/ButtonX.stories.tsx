import React from 'react';
import ButtonX from './ButtonX';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material-UI/ButtonX',
  component: ButtonX,
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

const Template = (args) => (<ButtonX {...args} />);
export const Default = Template.bind({});
Default.args = {
  color: 'default',
  variant: 'contained',
  children: 'Default',
  onClick: action('Default button clicked'),
}

export const Primary = () => (
  <ButtonX color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </ButtonX>
);

export const Secondary = () => (
  <ButtonX color="secondary" onClick={action('Secondary button clicked')} variant="contained">
    Secondary
  </ButtonX>
);


