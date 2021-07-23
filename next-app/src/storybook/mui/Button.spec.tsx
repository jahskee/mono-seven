import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import ButtonX from './Button';
import '@testing-library/jest-dom/extend-expect'

describe('Test the extended material-ui button', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonX />, div);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<ButtonX label="click me please" />);
    expect(getByTestId('button')).toHaveAttribute("label");
  });
});
