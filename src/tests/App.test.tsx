import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders ExerciseList', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Push-Ups/);
  expect(text).toBeInTheDocument();
});
