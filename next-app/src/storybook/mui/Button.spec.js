/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

afterEach(cleanup);
describe('Test the material-ui button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line react/jsx-filename-extension
    ReactDOM.render(<Button />, div);
    expect(true).toBe(true);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="click me please" />);
    expect(getByTestId('button')).toHaveTextContent('click me please');
  });
});
