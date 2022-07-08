import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[2]};
  color: ${({ theme }) => theme.colors.heading};
  margin: 0;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacePx[2]};
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.font};
  word-wrap: break-word;
  font-size: ${({ theme }) => theme.fontSize[1]};
  line-height: ${({ theme }) => theme.lineHeight[1]};
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
