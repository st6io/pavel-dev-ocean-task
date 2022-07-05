import { fireEvent, screen } from '@testing-library/react';
import BusinessesPage from '.';
import useBusinesses from '../../hooks/use-businesses';
import render from '../../tests/renderWithContext';

const mockData = [
  { id: 1, name: 'Business 1', description: 'descr 1' },
  { id: 2, name: 'Business 2', description: 'descr 2' },
  { id: 3, name: 'Business 3', description: 'descr 3' },
  { id: 4, name: 'Business 4', description: 'descr 4' },
  { id: 5, name: 'Business 5', description: 'descr 5' },
];

const mockNavigate = jest.fn();
jest.mock('../../hooks/use-businesses.tsx');
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  (useBusinesses as any).mockImplementation(() => mockData);
});

it('should render N business resumes', () => {
  render(<BusinessesPage />);

  mockData.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

it('should render kind message when there are no records', () => {
  (useBusinesses as any).mockImplementation(() => []);

  render(<BusinessesPage />);

  expect(screen.getByText('There are no businesses data')).toBeInTheDocument();
});

it('should navigate to business page on click', () => {
  render(<BusinessesPage />);

  fireEvent.click(screen.getByText('Business 2'));

  expect(mockNavigate).toHaveBeenCalledWith('/business/2');
});

it('should change background color on hover', () => {
  render(<BusinessesPage />);
  // TODO: Select the row better
  // eslint-disable-next-line testing-library/no-node-access
  const targetRow = screen.getByText('Business 2').parentElement?.parentElement;

  expect(targetRow).toHaveStyleRule('background-color', 'white');

  expect(targetRow).toHaveStyleRule('background-color', '#f0f0f0', { target: 'hover' });
});
