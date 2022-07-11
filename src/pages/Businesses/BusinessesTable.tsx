import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { BusinessResume } from '../../types/BusinessResume';
import { Path } from '../../constants/Path';

import TableRow from '../../components/TableRow';
import Button from '../../components/SimpleButton';

const commonRowStyles = css`
  height: 70px;
  align-items: center;
`;

const HeaderLabel = styled.span`
  color: ${({ theme }) => theme.colors.tableLabel};
  text-transform: uppercase;
  font-weight: bold;
`;

const DataRow = ({ name, description, ...rest }: Omit<BusinessResume, 'id'>) => (
  <TableRow first={<span>{name}</span>} second={<span>{description}</span>} {...rest} />
);

const StyledDataRow = styled(DataRow)`
  ${commonRowStyles}
  transition: background-color 100ms linear;
  background-color: ${({ theme }) => theme.colors.tableRow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tableRowHover};
  }
`;

const StyledHeader = styled(TableRow)`
  ${commonRowStyles}
  background-color: ${({ theme }) => theme.colors.tableRow};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacePx[2]};
  user-select: none;
`;

const Header = () => (
  <StyledHeader
    first={<HeaderLabel>Name</HeaderLabel>}
    second={<HeaderLabel>Description</HeaderLabel>}
  />
);

const ScrollableContainer = styled(Container)`
  max-height: 80vh;
  overflow-y: auto;
`;

const TableContent = styled(Container)`
  position: relative;
`;

const BusinessesTable = ({ businesses }: { businesses: BusinessResume[] }) => {
  const navigate = useNavigate();

  return (
    <TableContent fluid>
      <Header />

      <ScrollableContainer fluid>
        {businesses.map(({ id, name, description }: BusinessResume) => (
          <Button key={id} onClick={() => navigate(Path.Business + `/${id}`)}>
            <StyledDataRow name={name} description={description} />
          </Button>
        ))}
      </ScrollableContainer>
    </TableContent>
  );
};

export default BusinessesTable;
