import { useCallback } from 'react';
import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';

import { useNearbyPlaces } from '../hooks/use-nearby-places';
import { Address } from '../types/Address';

import TableRow from './TableRow';
import Button from './SimpleButton';

const Header = styled.h2`
  font-size: ${(props) => props.theme.fontSize[2]};
  color: ${(props) => props.theme.colors.heading};
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacePx[2]};
`;

const StyledTableRow = styled(TableRow)`
  height: 40px;
  background-color: ${(props) => props.theme.colors.sectionRowBackground};
  margin-bottom: ${(props) => props.theme.spacePx[2]};
  transition: background-color 100ms linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.tableRowHover};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.font};
  word-wrap: break-word;
  font-size: ${(props) => props.theme.fontSize[0]};
  line-height: ${(props) => props.theme.lineHeight[0]};
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
