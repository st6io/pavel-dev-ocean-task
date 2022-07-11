import { screen } from '@testing-library/react';
import BusinessPage from '.';
import { useBusiness } from '../../hooks/use-business';
import { useNearbyPlaces } from '../../hooks/use-nearby-places';
import { getAllSkeletons } from '../../tests/helpers';
import render from '../../tests/renderWithContext';

jest.mock('../../hooks/use-business.tsx');
jest.mock('../../hooks/use-nearby-places.tsx');

const mockData = {
  address: {
    city: 'Mock City',
    country: 'Mock Country',
    number: '123',
    street: 'Mock Street',
    zip: '1234',
  },
  description: 'Mock Description',
  email: 'mock@email.com',
  id: '123456',
  image: 'mock-image-source',
  name: 'Mock Name',
  phone: '123-456-7890',
};

const mockNearbyPlaces = [
  {
    id: '1',
    name: 'Mock Nearby Place',
    address: mockData.address,
  },
];

beforeEach(() => {
  (useBusiness as any).mockImplementation(() => ({
    data: { business: mockData },
    loading: false,
    error: false,
  }));
  (useNearbyPlaces as any).mockImplementation(() => ({
    data: {
      nearbyPlaces: mockNearbyPlaces,
    },
  }));
});

it('should render the address in certain format', () => {
  render(<BusinessPage />);

  expect(screen.getByText('123 Mock Street')).toBeInTheDocument();
  expect(screen.getByText('Mock City 1234, Mock Country')).toBeInTheDocument();
});

it('should render the contact information', () => {
  render(<BusinessPage />);

  expect(screen.getByText('mock@email.com')).toBeInTheDocument();
  expect(screen.getByText('123-456-7890')).toBeInTheDocument();
});

it('should render kind message when there is no such business', () => {
  (useBusiness as any).mockImplementation(() => ({
    data: null,
    loading: false,
    error: false,
  }));

  render(<BusinessPage />);

  expect(screen.getByText("There's nothing here :(")).toBeInTheDocument();
});

it('should render kind message when there is an error', () => {
  (useBusiness as any).mockImplementation(() => ({
    data: { business: mockData },
    loading: false,
    error: new Error('something bad happened'),
  }));

  render(<BusinessPage />);

  expect(screen.getByText("There's nothing here :(")).toBeInTheDocument();
});

it('should render a loading indicator while loading', () => {
  (useBusiness as any).mockImplementation(() => ({
    data: { business: mockData },
    loading: true,
    error: false,
  }));

  render(<BusinessPage />);

  const skeletonsCount = getAllSkeletons().length;
  expect(skeletonsCount).toEqual(4);
});

describe('Styles', () => {
  it('should render image with correct styles', () => {
    render(<BusinessPage />);

    const image = screen.getByAltText('Mock Name - Mock Description');

    expect(image).toHaveStyle({
      'object-fit': 'cover',
      width: '100%',
      height: '350px',
      'user-select': 'none',
    });
  });

  const labelStyles = {
    'font-size': '16px',
    'line-height': '22px',
    'word-wrap': 'break-word',
    color: '#6b6a7a',
  };

  it('should render Address labels with correct styles', () => {
    render(<BusinessPage />);

    expect(screen.getByText('123 Mock Street')).toHaveStyle(labelStyles);
    expect(screen.getByText('Mock City 1234, Mock Country')).toHaveStyle(labelStyles);
  });

  it('should render Contact labels with correct styles', () => {
    render(<BusinessPage />);

    expect(screen.getByText('mock@email.com')).toHaveStyle(labelStyles);
    expect(screen.getByText('123-456-7890')).toHaveStyle(labelStyles);
  });

  it('should render Nearby Place labels with correct style', () => {
    const nearbyLabelsStyles = {
      ...labelStyles,
      'font-size': '14px',
      'line-height': '20px',
    };

    render(<BusinessPage />);

    expect(screen.getByText('Mock Nearby Place')).toHaveStyle(nearbyLabelsStyles);
    expect(screen.getByText('123 Mock Street, Mock City 1234, Mock Country')).toHaveStyle(
      nearbyLabelsStyles,
    );
  });

  it('should render section titles with correct styles', () => {
    const titleStyles = {
      'font-size': '24px',
      color: '#2f2e43',
      padding: 0,
      margin: '0px 0px 10px 0px', // bottom = 10px
    };

    render(<BusinessPage />);

    expect(screen.getByText('Address')).toHaveStyle(titleStyles);
    expect(screen.getByText('Contact')).toHaveStyle(titleStyles);
    expect(screen.getByText('Nearby Places')).toHaveStyle(titleStyles);
  });
});

describe('Nearby Places', () => {
  it('should render nearby places', () => {
    render(<BusinessPage />);

    expect(screen.getByText('Mock Nearby Place')).toBeInTheDocument();
    expect(screen.getByText('123 Mock Street, Mock City 1234, Mock Country')).toBeInTheDocument();
  });

  it('should render kind message when there are no nearby places', () => {
    (useNearbyPlaces as any).mockImplementation(() => ({
      data: {
        nearbyPlaces: [],
      },
    }));

    render(<BusinessPage />);

    expect(screen.getByText("There's no data :(")).toBeInTheDocument();
  });
});
