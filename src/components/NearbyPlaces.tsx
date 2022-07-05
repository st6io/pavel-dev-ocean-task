import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';
import { useNearbyPlaces } from '../hooks/use-nearby-places';
import { Address } from '../types/Address';
import TableRow from './TableRow';

const Header = styled.h2`
  font-size: 24px;
  color: #2f2e43;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const StyledTableRow = styled(TableRow)`
  height: 40px;
  background-color: #f7f7f7;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Span = styled.span`
  color: #6b6a7a;
`;

const NearbyPlaces = ({ address }: { address: Address }) => {
  const nearbyPlaces = useNearbyPlaces(address);
  console.log(nearbyPlaces);

  return (
    <Container>
      <Row>
        <Header>Nearby Places</Header>
      </Row>

      {nearbyPlaces.map(({ id, name, address: { number, street, city, zip, country } }) => (
        <StyledTableRow
          key={id}
          first={<Span>{name}</Span>}
          second={<Span>{`${number} ${street}, ${city} ${zip}, ${country}`}</Span>}
        />
      ))}
    </Container>
  );
};

export default NearbyPlaces;