import { makeVar, gql } from '@apollo/client';

export const loadingSimulationOn = makeVar(false);

export const GET_IS_LOADING_SIMULATION_ON_QUERY = gql`
  query getIsLoadingSimulationOn {
    loadingSimulationOn @client
  }
`;
