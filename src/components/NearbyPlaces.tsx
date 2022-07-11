import { useCallback } from 'react';
import styled from '@emotion/styled';
import { Container, Row } from 'react-bootstrap';

import { useNearbyPlaces } from '../hooks/use-nearby-places';

import TableRow from './TableRow';
import Button from './SimpleButton';
import { useNavigate } from 'react-router-dom';
import { Path } from '../constants/Path';
import { NearbyPlaceSearch } from '../types/NearbyPlacesSearch';

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[2]};
  color: ${({ theme }) => theme.colors.heading};
  margin: 0;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacePx[2]};
`;

const StyledTableRow = styled(TableRow)`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.sectionRowBackground};
  margin-bottom: ${({ theme }) => theme.spacePx[2]};
  transition: background-color 100ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tableRowHover};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.font};
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.fontSize[0]};
  line-height: ${({ theme }) => theme.lineHeight[0]};
`;

const NoDataMessage = () => <span>There's no data :(</span>;

const NearbyPlaces = ({ location, relativePlaceId }: NearbyPlaceSearch) => {
  const nearbyPlaces = useNearbyPlaces({ location, relativePlaceId });
  const navigate = useNavigate();

  const Table = useCallback(
    () => (
      <>
        {nearbyPlaces.map(({ id, name, address: { number, street, city, zip, country } }) => (
          <Button key={id} onClick={() => navigate(Path.Business + `/${id}`)}>
            <StyledTableRow
              first={<Span>{name}</Span>}
              second={<Span>{`${number} ${street}, ${city} ${zip}, ${country}`}</Span>}
            />
          </Button>
        ))}
      </>
    ),
    [nearbyPlaces, navigate],
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
