import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';

const Header = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.font};
  word-wrap: break-word;
  font-size: 16px;
  line-height: 22px;
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
