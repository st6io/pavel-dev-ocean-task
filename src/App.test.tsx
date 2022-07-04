import { render, screen } from '@testing-library/react';
import App from './App';

it('should redirect to businesses page', () => {
  render(<App />);

  const titleElement = screen.queryByText(/DevOcean React Task/i);
  expect(titleElement).toBeInTheDocument();
});
