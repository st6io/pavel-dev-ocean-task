import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

import { useBusinesses } from '../../hooks/use-businesses';

import Skeleton from './Skeleton';
import BusinessesTable from './BusinessesTable';

const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacePx[4]};
  margin-bottom: ${({ theme }) => theme.spacePx[4]};
  max-width: ${({ theme }) => theme.contentMaxWidth};
`;

const NoDataMessage = () => <span>There is no businesses data</span>;

const Content = () => {
  const { data, loading, error } = useBusinesses();

  if (loading) {
    return <Skeleton />;
  }

  const businesses = data.businesses;
  if (error || !businesses?.length) {
    return <NoDataMessage />;
  }

  return <BusinessesTable businesses={businesses} />;
};

// TODO: Pagination
const BusinessesPage = () => (
  <StyledContainer fluid>
    <Content />
  </StyledContainer>
);

export default BusinessesPage;
