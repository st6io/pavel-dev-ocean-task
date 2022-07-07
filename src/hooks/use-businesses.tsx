import { QueryResult, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { getAllBusinesses } from '../queries/get-all-businesses';
import { GET_IS_LOADING_SIMULATION_ON_QUERY } from '../reactivities/loading-simulation';

export const useBusinesses = (): QueryResult => {
  const result = useQuery(getAllBusinesses);
  const [loading, setLoading] = useState(result.loading);
  const { data } = useQuery(GET_IS_LOADING_SIMULATION_ON_QUERY);

  useEffect(() => {
    if (!data.loadingSimulationOn) {
      return setLoading(result.loading);
    }

    setLoading(true);
  }, [result.loading, data.loadingSimulationOn]);

  return {
    ...result,
    loading,
  };
};
