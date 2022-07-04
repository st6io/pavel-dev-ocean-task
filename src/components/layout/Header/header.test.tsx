import { render, screen } from '@testing-library/react';
import Header from '.';

it('should render logo and title', () => {
  render(<Header />);

  expect(screen.getByText('DevOcean React Task')).toBeInTheDocument();
  expect(screen.getByAltText('DevOcean React Logo')).toBeInTheDocument();
});
