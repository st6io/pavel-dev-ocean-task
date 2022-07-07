import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { BusinessResume } from '../../types/BusinessResume';
import { useBusinesses } from '../../hooks/use-businesses';
import { Path } from '../../constants/Path';

import TableRow from '../../components/TableRow';
import Button from '../../components/SimpleButton';

import Skeleton from './Skeleton';

const commonRowStyles = css`
  height: 70px;
  background-color: white;
  align-items: center;
`;

const HeaderLabel = styled.span`
  color: purple;
  text-transform: uppercase;
  font-weight: bold;
`;

const DataRow = ({ name, description, ...rest }: Omit<BusinessResume, 'id'>) => (
  <TableRow first={<span>{name}</span>} second={<span>{description}</span>} {...rest} />
);

const StyledDataRow = styled(DataRow)`
  ${commonRowStyles}
  transition: background-color 100ms linear;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledHeader = styled(TableRow)`
  ${commonRowStyles}
  margin: 0;
  margin-bottom: 10px;
  user-select: none;
`;

const Header = () => (
  <StyledHeader
    first={<HeaderLabel>Name</HeaderLabel>}
    second={<HeaderLabel>Description</HeaderLabel>}
  />
);

const StyledContainer = styled(Container)`
  margin-top: 20px;
`;

const ScrollableContainer = styled(Container)`
  max-height: 80vh;
  overflow-y: auto;
`;

const TableContent = styled(Container)`
  position: relative;
`;

const NoDataMessage = () => <span>There is no businesses data</span>;

const BusinessesTable = ({ businesses }: { businesses: BusinessResume[] }) => {
  let navigate = useNavigate();

  return (
    <TableContent>
      <Header />

      <ScrollableContainer style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        {businesses.map(({ id, name, description }: BusinessResume) => (
          <Button key={id} onClick={() => navigate(Path.Business + `/${id}`)}>
            <StyledDataRow name={name} description={description} />
          </Button>
        ))}
      </ScrollableContainer>
    </TableContent>
  );
};

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
  <StyledContainer>
    <Content />
  </StyledContainer>
);

export default BusinessesPage;
