import { QueryResult, useQuery } from '@apollo/client';
import { getAllBusinesses } from '../queries/get-all-businesses';

export const useBusinesses = (): QueryResult => useQuery(getAllBusinesses);
