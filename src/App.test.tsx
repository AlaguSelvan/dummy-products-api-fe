import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product search heading', () => {
  render(<App />);
  const heading = screen.getByText(/Product Search/i);
  //@ts-ignore
  expect(heading).toBeInTheDocument();
});
