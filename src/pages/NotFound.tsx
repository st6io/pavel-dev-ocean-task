import { Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Path } from '../constants/Path';

const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacePx[2]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NotFoundPage = () => (
  <StyledContainer>
    <Row>
      <span>There's nothing here :(</span>
    </Row>
    <Row>
      <StyledLink to={Path.Root}>Wanna go back to home page?</StyledLink>
    </Row>
  </StyledContainer>
);

export default NotFoundPage;
