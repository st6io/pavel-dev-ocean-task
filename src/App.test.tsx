import { render, screen } from '@testing-library/react';
import App from './App';

it('should redirect to businesses page', () => {
  render(<App />);

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();
});

it('should go to NotFound page when url is not matched', () => {
  window.history.pushState({}, 'Nice place to be, but not at this time', '/somewhere');

  render(<App />);

  expect(screen.getByText("There's nothing here :(")).toBeInTheDocument();
});
