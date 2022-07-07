import { screen } from '@testing-library/react';
import Header from '.';
import renderWithContext from '../../../tests/renderWithContext';

jest.mock('../../LoadingSimulator', () => () => null);

it('should render logo and title', () => {
  renderWithContext(<Header />);

  expect(screen.getByText('DevOcean React Task')).toBeInTheDocument();
  expect(screen.getByAltText('DevOcean React Logo')).toBeInTheDocument();
});
