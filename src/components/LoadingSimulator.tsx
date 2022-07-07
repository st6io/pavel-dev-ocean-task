import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';

import {
  loadingSimulationOn,
  GET_IS_LOADING_SIMULATION_ON_QUERY,
} from '../reactivities/loading-simulation';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  width: 200px;
`;

const LoadingSimulator = (props: any) => {
  const toggleMode = () => {
    loadingSimulationOn(!loadingSimulationOn());
  };
  const { data } = useQuery(GET_IS_LOADING_SIMULATION_ON_QUERY);

  return data.loadingSimulationOn ? (
    <StyledButton onClick={toggleMode} variant="success" {...props}>
      Turn off the simulation
    </StyledButton>
  ) : (
    <StyledButton onClick={toggleMode} variant="danger" {...props}>
      Simulate loading
    </StyledButton>
  );
};

export default LoadingSimulator;
