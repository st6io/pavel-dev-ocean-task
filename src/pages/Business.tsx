import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NearbyPlaces from '../components/NearbyPlaces';
import Section from '../components/SectionWithTitle';
import { useBusiness } from '../hooks/use-business';
import NotFoundPage from './NotFound';

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`;

const ContentCol = styled(Col)`
  padding: 10px;
`;

const InformationRow = styled(Row)`
  max-width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const NearbyPlacesContainer = styled(ContentCol)`
  background-color: white;
`;

const BusinessPage = () => {
  const params = useParams();
  const business = useBusiness(params.id as string);

  if (!business) {
    return <NotFoundPage />;
  }

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
