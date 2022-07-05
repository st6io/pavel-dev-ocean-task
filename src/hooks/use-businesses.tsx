import dataMock from '../data/businesses.json';
import { Business } from '../types/Business';

export const useBusinesses = (): Business[] => dataMock;
