import { Address } from './Address';
import { Business } from './Business';

export interface NearbyPlaceSearch {
  location: Address;
  // nearby to a certain Business
  relativePlaceId: Business['id'];
}
