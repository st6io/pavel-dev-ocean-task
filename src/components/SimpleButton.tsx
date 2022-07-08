import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100%;
  border: 0;
  text-align: inherit;
  padding: 0;

  margin-bottom: ${({ theme }) => theme.spacePx[1]};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default StyledButton;
