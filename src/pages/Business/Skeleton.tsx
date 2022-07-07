import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-bootstrap';
import BaseSkeleton from 'react-loading-skeleton';

const Section = styled(BaseSkeleton)`
  height: 300px;
`;

const Image = styled(BaseSkeleton)`
  height: 350px;
  margin-bottom: 20px;
`;

const Skeleton = () => (
  <Container>
    <Row>
      <Col>
        <Image />
      </Col>
    </Row>

    <Row>
      <Col md={5}>
        <Row>
          <Col md={6}>
            <Section />
          </Col>

          <Col md={6}>
            <Section />
          </Col>
        </Row>
      </Col>

      <Col>
        <Section />
      </Col>
    </Row>
  </Container>
);

export default Skeleton;
