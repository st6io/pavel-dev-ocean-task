import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the task title', () => {
  render(<App />);
  const titleElement = screen.getByText(/DevOcean React Task/i);
  expect(titleElement).toBeInTheDocument();
});
