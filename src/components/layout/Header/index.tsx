import styled from '@emotion/styled';
import logo from './logo.png';

const StyledHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 100px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
`;

const Logo = styled.img`
  width: 35px;
  height: 30px;
  margin-right: 10px;
`;

const Header = () => (
  <StyledHeader>
    <Logo src={logo} alt="DevOcean React Logo" />
    <Title>DevOcean React Task</Title>
  </StyledHeader>
);

export default Header;