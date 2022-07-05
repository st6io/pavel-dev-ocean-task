import { Address } from '../types/Address';
import { NearbyPlace } from '../types/NearbyPlace';

const address = {
  number: '472-488',
  street: 'Brixton Rd',
  zip: 'SW9 SEH',
  city: 'London',
  country: 'United Kingdom',
};

const dataMock = [
  {
    id: '1',
    name: 'Caffè Nero',
    address,
  },
  {
    id: '2',
    name: 'EAT.',
    address,
  },
  {
    id: '3',
    name: 'Pret A Manger',
    address,
  },
  {
    id: '4',
    name: 'Coffee Republic',
    address,
  },
];

export const useNearbyPlaces = (location: Address): NearbyPlace[] => dataMock;
