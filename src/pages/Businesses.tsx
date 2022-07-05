import { Col, Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import { BusinessResume } from '../types/BusinessResume';
import useBusinesses from '../hooks/use-businesses';

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
  margin-bottom: 5px;
  transition: background-color 100ms linear;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const DataRow = ({ name, description, ...rest }: Omit<BusinessResume, 'id'>) => (
  <TableRow first={<span>{name}</span>} second={<span>{description}</span>} {...rest} />
);

const StyledDataRow = styled(DataRow)`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableRow = ({ first, second, ...rest }: TableRowProps) => (
  <StyledRow {...rest}>
    <Col md={3}>{first} </Col>
    <Col>{second}</Col>
  </StyledRow>
);

const Header = () => (
  <TableRow
    first={<HeaderLabel>Name</HeaderLabel>}
    second={<HeaderLabel>Description</HeaderLabel>}
  />
);

const ScrollableContainer = styled(Container)`
  margin-top: 20px;
  max-height: 80vh;
  overflow-y: auto;
`;

// TODO: Floating header
// TODO: Pagination
const BusinessesPage = () => {
  const businesses = useBusinesses();

  return (
    <ScrollableContainer>
      <Header />

      {businesses.map(({ id, name, description }: BusinessResume) => (
        <StyledDataRow key={id} name={name} description={description} />
      ))}
    </ScrollableContainer>
  );
};

export default BusinessesPage;
