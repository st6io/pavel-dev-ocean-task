import { Address } from '../types/Address';
import { Business } from '../types/Business';
import { NearbyPlace } from '../types/NearbyPlace';
import { useBusinesses } from './use-businesses';

const mapBusinessToNearbyPlace = (business: Business): NearbyPlace => ({
  address: business.address,
  name: business.name,
  id: business.id,
});

export const useNearbyPlaces = (location: Address): NearbyPlace[] => {
  const allBusinessResult = useBusinesses();

  const sameCityBusinesses = (allBusinessResult.data?.businesses.filter(
    (b: Business) => b.address.city === location.city,
  ) || []) as Business[];

  return sameCityBusinesses.map(mapBusinessToNearbyPlace);
};
