import { screen } from '@testing-library/react';
import Header from '.';
import renderWithContext from '../../../tests/renderWithContext';

it('should render logo and title', () => {
  renderWithContext(<Header />);

  expect(screen.getByText('DevOcean React Task')).toBeInTheDocument();
  expect(screen.getByAltText('DevOcean React Logo')).toBeInTheDocument();
});
