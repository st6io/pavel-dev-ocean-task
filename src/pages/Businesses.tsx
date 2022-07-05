import { Col, Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import dataMock from '../data/businesses.json';
import { BusinessResume } from '../types/BusinessResume';

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

const DataRow = ({ name, description, ...rest }: BusinessResume) => (
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
const BusinessesPage = () => (
  <ScrollableContainer>
    <Header />

    {dataMock.map(({ id, name, description }: any) => (
      <StyledDataRow key={id} name={name} description={description} />
    ))}
  </ScrollableContainer>
);

export default BusinessesPage;
