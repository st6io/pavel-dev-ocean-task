import { Business } from '../types/Business';
import { useBusinesses } from './use-businesses';

export const useBusiness = (id: Business['id']): Business | undefined => {
  const allBusinesses = useBusinesses();
  return allBusinesses.find((b) => b.id === id);
};
