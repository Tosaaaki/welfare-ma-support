import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from '../components/TestComponent';

test('renders hello message', () => {
  render(<TestComponent />);
  expect(screen.getByText('Hello Jest')).toBeInTheDocument();
});
