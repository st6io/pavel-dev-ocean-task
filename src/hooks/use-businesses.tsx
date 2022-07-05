import dataMock from '../data/businesses.json';
import { Business } from '../types/Business';

const useBusinesses = (): Business[] => {
  return dataMock;
};

export default useBusinesses;
