import { renderHook } from '@testing-library/react';
import { NearbyPlaceSearch } from '../../types/NearbyPlacesSearch';
import { useBusinesses } from '../use-businesses';
import { useNearbyPlaces } from '../use-nearby-places';

const mockData = [
  { id: '1', address: { city: 'Test' } },
  { id: '2', address: { city: 'Test' } },
  { id: '3', address: { city: 'Test' } },
  { id: '4', address: { city: 'Test' } },
  { id: '5', address: { city: 'Test' } },
];

jest.mock('../use-businesses');

beforeEach(() => {
  (useBusinesses as any).mockImplementation(() => ({
    data: { businesses: mockData },
    loading: false,
    error: false,
  }));
});

it('should filter current place from suggested nearby places', () => {
  const { result } = renderHook(useNearbyPlaces, {
    initialProps: {
      location: mockData[0].address as NearbyPlaceSearch['location'],
      relativePlaceId: mockData[0].id as NearbyPlaceSearch['relativePlaceId'],
    },
  });

  // length = mockData - 1; first nearby place is not with {id: '1'}
  expect(result.current.data.nearbyPlaces.length).toEqual(4);
  expect(result.current.data.nearbyPlaces[0].id).toEqual('2');
});

it("should return 0 nearby places when city doesn't match", () => {
  const { result } = renderHook(useNearbyPlaces, {
    initialProps: {
      location: { city: 'Mock' } as NearbyPlaceSearch['location'],
      relativePlaceId: '123',
    },
  });

  expect(result.current.data.nearbyPlaces.length).toEqual(0);
});

it('should return only same city nearby places', () => {
  (useBusinesses as any).mockImplementation(() => ({
    data: {
      businesses: [
        ...mockData,
        { id: '6', address: { city: 'Mock' } },
        { id: '7', address: { city: 'London' } },
        { id: '8', address: { city: 'New York' } },
      ],
    },
    loading: false,
    error: false,
  }));
  const { result } = renderHook(useNearbyPlaces, {
    initialProps: {
      location: { city: 'London' } as NearbyPlaceSearch['location'],
      relativePlaceId: '123',
    },
  });

  expect(result.current.data.nearbyPlaces.length).toEqual(1);
});
