import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../components/SectionWithTitle';

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

const TableRow = styled(Row)`
  height: 40px;
  background-color: #f7f7f7;
  align-items: center;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Span = styled.span`
  color: #6b6a7a;
`;

const BusinessPage = () => (
  <StyledContainer>
    <Row>
      <Col>
        <Image
          src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000"
          alt="TODO"
        />
      </Col>
    </Row>

    <InformationRow>
      <Col md={5}>
        <Row>
          <ContentCol md={6}>
            <Section title="Address" firstRow="first line here" secondRow="second line here" />
          </ContentCol>

          <ContentCol md={6}>
            <Section title="Contact" firstRow="first line here" secondRow="second line here" />
          </ContentCol>
        </Row>
      </Col>

      <NearbyPlacesContainer>
        <Container>
          <Row>
            <Header>Nearby Places</Header>
          </Row>
          <TableRow>
            <Col md={3}>
              <Span>Place</Span>
            </Col>
            <Col>
              <Span>Location</Span>
            </Col>
          </TableRow>

          <TableRow>
            <Col md={3}>
              <Span>Place</Span>
            </Col>
            <Col>
              <Span>Location</Span>
            </Col>
          </TableRow>

          <TableRow>
            <Col md={3}>
              <Span>Place</Span>
            </Col>
            <Col>
              <Span>Location</Span>
            </Col>
          </TableRow>

          <TableRow>
            <Col md={3}>
              <Span>Place</Span>
            </Col>
            <Col>
              <Span>Location</Span>
            </Col>
          </TableRow>
        </Container>
      </NearbyPlacesContainer>
    </InformationRow>
  </StyledContainer>
);

export default BusinessPage;
