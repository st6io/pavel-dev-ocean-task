import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Section from '../components/SectionWithTitle';
import TableRow from '../components/TableRow';
import { useBusiness } from '../hooks/use-business';
import NotFoundPage from './NotFound';

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const ContentCol = styled(Col)`
  padding: 10px;
`;

const InformationRow = styled(Row)`
  max-width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  color: #2f2e43;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const NearbyPlacesContainer = styled(ContentCol)`
  background-color: white;
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

const NearbyPlaces = () => (
  <Container>
    <Row>
      <Header>Nearby Places</Header>
    </Row>

    <StyledTableRow first={<Span>Place</Span>} second={<Span>Location</Span>} />
  </Container>
);

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
          <NearbyPlaces />
        </NearbyPlacesContainer>
      </InformationRow>
    </StyledContainer>
  );
};

export default BusinessPage;
