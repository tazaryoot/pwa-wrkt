import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders ExerciseList', () => {
  const { getByText } = render(<App />);
  const text = getByText(/ExerciseList/);
  expect(text).toBeInTheDocument();
});
