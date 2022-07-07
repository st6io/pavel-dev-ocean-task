import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { BusinessResume } from '../../types/BusinessResume';
import { useBusinesses } from '../../hooks/use-businesses';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../constants/Path';
import TableRow from '../../components/TableRow';
import LoadingIndicator from '../../components/LoadingIndicator';

const HeaderLabel = styled.span`
  color: purple;
  text-transform: uppercase;
  font-weight: bold;
`;

const DataRow = ({ name, description, ...rest }: Omit<BusinessResume, 'id'>) => (
  <TableRow first={<span>{name}</span>} second={<span>{description}</span>} {...rest} />
);

const StyledDataRow = styled(DataRow)`
  height: 70px;
  background-color: white;
  align-items: center;
  transition: background-color 100ms linear;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  border: 0;
  text-align: inherit;
  padding: 0;

  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledHeader = styled(TableRow)`
  height: 70px;
  background-color: white;
  align-items: center;
  transition: background-color 100ms linear;
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

const ScrollableContainer = styled(StyledContainer)`
  max-height: 80vh;
  overflow-y: auto;
`;

const NoDataMessage = () => <span>There is no businesses data</span>;

const BusinessesTable = ({ businesses }: { businesses: BusinessResume[] }) => {
  let navigate = useNavigate();

  return (
    <>
      <Header />

      {businesses.map(({ id, name, description }: BusinessResume) => (
        <StyledButton key={id} onClick={() => navigate(Path.Business + `/${id}`)}>
          <StyledDataRow name={name} description={description} />
        </StyledButton>
      ))}
    </>
  );
};

// TODO: Floating header
// TODO: Pagination
// TODO: Loading - placeholders & animations
const BusinessesPage = () => {
  const { data, loading, error } = useBusinesses();

  if (loading) {
    return (
      <StyledContainer>
        <LoadingIndicator />
      </StyledContainer>
    );
  }

  const businesses = data.businesses;

  if (error || !businesses?.length) {
    return (
      <StyledContainer>
        <NoDataMessage />
      </StyledContainer>
    );
  }

  return (
    <ScrollableContainer>
      <BusinessesTable businesses={businesses} />
    </ScrollableContainer>
  );
};

export default BusinessesPage;
