import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import ButtonX from './ButtonX';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);
describe('Test the extended material-ui button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonX />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<ButtonX label="click me please" />);
    expect(getByTestId('button')).toHaveAttribute("label");
  });
});
