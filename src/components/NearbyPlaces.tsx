import { useCallback } from 'react';
import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';

import { useNearbyPlaces } from '../hooks/use-nearby-places';
import { Address } from '../types/Address';

import TableRow from './TableRow';
import Button from './SimpleButton';

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
  transition: background-color 100ms linear;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Span = styled.span`
  color: #6b6a7a;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 20px;
`;

const NoDataMessage = () => <span>There's no data :(</span>;

const NearbyPlaces = ({ address }: { address: Address }) => {
  const nearbyPlaces = useNearbyPlaces(address);

  const Table = useCallback(
    () => (
      <>
        {nearbyPlaces.map(({ id, name, address: { number, street, city, zip, country } }) => (
          <Button key={id}>
            <StyledTableRow
              first={<Span>{name}</Span>}
              second={<Span>{`${number} ${street}, ${city} ${zip}, ${country}`}</Span>}
            />
          </Button>
        ))}
      </>
    ),
    [nearbyPlaces],
  );

  return (
    <Container>
      <Row>
        <Header>Nearby Places</Header>
      </Row>

      {nearbyPlaces.length ? <Table /> : <NoDataMessage />}
    </Container>
  );
};

export default NearbyPlaces;
