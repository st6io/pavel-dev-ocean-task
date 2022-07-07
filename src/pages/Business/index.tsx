import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useBusiness } from '../../hooks/use-business';
import NotFoundPage from '../NotFound';

import NearbyPlaces from '../../components/NearbyPlaces';
import Section from '../../components/SectionWithTitle';

import Skeleton from './Skeleton';

const StyledContainer = styled(Container)`
  margin-top: ${(props) => props.theme.spacePx[6]};
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`;

const ContentCol = styled(Col)`
  padding: ${(props) => props.theme.spacePx[2]};
`;

const InformationRow = styled(Row)`
  max-width: 95%;
  margin: auto;
  margin-top: ${(props) => props.theme.spacePx[4]};
`;

const NearbyPlacesContainer = styled(ContentCol)`
  background-color: ${(props) => props.theme.colors.nearbyPlacesContainerBackground};
`;

const BusinessPage = () => {
  const params = useParams();
  const { loading, error, data } = useBusiness(params.id as string);

  if (loading) {
    return (
      <StyledContainer>
        <Skeleton />
      </StyledContainer>
    );
  }

  if (error || !data || !data.business) {
    return <NotFoundPage />;
  }

  const { business } = data;
  const { address, email, image, phone, name, description } = business;
  const { number, street, city, zip, country } = address;

  return (
    <StyledContainer>
      <Row>
        <Col>
          <Image src={image} alt={`${name} - ${description}`} />
        </Col>
      </Row>

      <InformationRow>
        <Col md={5}>
          <Row>
            <ContentCol md={6}>
              <Section
                title="Address"
                firstRow={`${number} ${street}`}
                secondRow={`${city} ${zip}, ${country}`}
              />
            </ContentCol>

            <ContentCol md={6}>
              <Section title="Contact" firstRow={phone} secondRow={email} />
            </ContentCol>
          </Row>
        </Col>

        <NearbyPlacesContainer>
          <NearbyPlaces address={address} />
        </NearbyPlacesContainer>
      </InformationRow>
    </StyledContainer>
  );
};

export default BusinessPage;
