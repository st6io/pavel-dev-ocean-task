import { render, screen } from '@testing-library/react';
import App from './App';

it('should redirect to businesses page', () => {
  render(<App />);

  expect(screen.getByText('All businesses page')).toBeInTheDocument();
});
