import { render, screen } from '@testing-library/react';
import App from './App';
import { Path } from './constants/Path';

it('should redirect to businesses page', () => {
  render(<App />);

  expect(window.location.pathname).toEqual(Path.AllBusinesses);
});

it('should go to NotFound page when url is not matched', () => {
  window.history.pushState({}, 'Nice place to be, but not at this time', '/somewhere');

  render(<App />);

  expect(screen.getByText("There's nothing here :(")).toBeInTheDocument();
});

it('should redirect /business (no id) to /businesses', () => {
  window.history.pushState({}, 'Business index page, but no id there', '/business');

  render(<App />);

  expect(window.location.pathname).toEqual(Path.AllBusinesses);
});
