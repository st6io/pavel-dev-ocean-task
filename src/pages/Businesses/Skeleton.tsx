import styled from '@emotion/styled';
import BaseSkeleton from 'react-loading-skeleton';

const Row = styled(BaseSkeleton)`
  height: 70px;
  margin-bottom: 5px;
`;

const Header = styled(BaseSkeleton)`
  height: 70px;
  margin-bottom: 10px;
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
