import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Goals', () => {
  const { getByText } = render(<App />);
  const text = getByText(/goal/);
  expect(text).toBeInTheDocument();
});
