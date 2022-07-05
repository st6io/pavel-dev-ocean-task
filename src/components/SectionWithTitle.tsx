import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';

const Header = styled.h2`
  font-size: 24px;
  color: #2f2e43;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const Span = styled.span`
  color: #6b6a7a;
`;

export interface SectionProps {
  title: string;
  firstRow: string;
  secondRow: string;
}

const Section = ({ title, firstRow, secondRow }: SectionProps) => (
  <Container>
    <Row>
      <Col>
        <Header>{title}</Header>
      </Col>
    </Row>
    <Row>
      <Span>{firstRow}</Span>
    </Row>
    <Row>
      <Span>{secondRow}</Span>
    </Row>
  </Container>
);

export default Section;
