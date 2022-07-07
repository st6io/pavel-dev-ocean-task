import styled from '@emotion/styled';
import BaseSkeleton from 'react-loading-skeleton';

const Row = styled(BaseSkeleton)`
  height: 70px;
  margin-bottom: ${(props) => props.theme.spacePx[1]};
`;

const Header = styled(BaseSkeleton)`
  height: 70px;
  margin-bottom: ${(props) => props.theme.spacePx[2]};
`;

const numberOfRows = 10;

const Skeleton = () => (
  <>
    <Header />

    {Array.from(Array(numberOfRows), (_, i) => (
      <Row key={i} />
    ))}
  </>
);

export default Skeleton;
