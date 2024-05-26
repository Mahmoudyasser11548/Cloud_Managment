// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vite', () => {
  render(<App />);
  const linkElement = screen.getByText(/vite/i);
  expect(linkElement).toBeInTheDocument();
});
