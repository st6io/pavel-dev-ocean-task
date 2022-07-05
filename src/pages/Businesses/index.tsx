import { Col, Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import { BusinessResume } from '../../types/BusinessResume';
import useBusinesses from '../../hooks/use-businesses';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../constants/Path';

interface TableRowProps {
  first: React.ReactElement;
  second: React.ReactElement;
}

const HeaderLabel = styled.span`
  color: purple;
  text-transform: uppercase;
  font-weight: bold;
`;

const StyledRow = styled(Row)`
  height: 70px;
  background-color: white;
  align-items: center;
  transition: background-color 100ms linear;
`;

const DataRow = ({ name, description, ...rest }: Omit<BusinessResume, 'id'>) => (
  <TableRow first={<span>{name}</span>} second={<span>{description}</span>} {...rest} />
);

const StyledDataRow = styled(DataRow)`
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

const TableRow = ({ first, second, ...rest }: TableRowProps) => (
  <StyledRow {...rest}>
    <Col md={3}>{first} </Col>
    <Col>{second}</Col>
  </StyledRow>
);

const StyledHeader = styled(TableRow)`
  margin-bottom: 10px;
  user-select: none;
`;

const Header = () => (
  <StyledHeader
    first={<HeaderLabel>Name</HeaderLabel>}
    second={<HeaderLabel>Description</HeaderLabel>}
  />
);

const ScrollableContainer = styled(Container)`
  margin-top: 20px;
  max-height: 80vh;
  overflow-y: auto;
`;

const NoDataMessage = () => <span>There are no businesses data</span>;

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
const BusinessesPage = () => {
  const businesses = useBusinesses();

  return (
    <ScrollableContainer>
      {businesses.length ? <BusinessesTable businesses={businesses} /> : <NoDataMessage />}
    </ScrollableContainer>
  );
};

export default BusinessesPage;
