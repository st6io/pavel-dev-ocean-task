import { QueryResult } from '@apollo/client';
import { Business } from '../types/Business';
import { NearbyPlace } from '../types/NearbyPlace';
import { NearbyPlaceSearch } from '../types/NearbyPlacesSearch';
import { useBusinesses } from './use-businesses';

const mapBusinessToNearbyPlace = (business: Business): NearbyPlace => ({
  address: business.address,
  name: business.name,
  id: business.id,
});

export const useNearbyPlaces = ({ relativePlaceId, location }: NearbyPlaceSearch): QueryResult => {
  const allBusinessResult = useBusinesses();

  const sameCityBusinesses = (allBusinessResult.data?.businesses.filter(
    (b: Business) => relativePlaceId !== b.id && b.address.city === location.city,
  ) || []) as Business[];

  return {
    ...allBusinessResult,
    data: {
      nearbyPlaces: sameCityBusinesses.map(mapBusinessToNearbyPlace),
    },
  };
};
