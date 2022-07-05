import styled from '@emotion/styled';
import { Row, Col } from 'react-bootstrap';

const StyledRow = styled(Row)`
  align-items: center;
`;

interface TableRowProps {
  first: React.ReactElement;
  second: React.ReactElement;
}

const TableRow = ({ first, second, ...rest }: TableRowProps) => (
  <StyledRow {...rest}>
    <Col md={3}>{first} </Col>
    <Col>{second}</Col>
  </StyledRow>
);

export default TableRow;
