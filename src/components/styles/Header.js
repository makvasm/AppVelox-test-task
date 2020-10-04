import styled from 'styled-components';
import variables from './Variables';

export const Header = styled.div`
  width: 100%;
  height: 55px;
  padding: 2px 40px;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${variables.colorSecondary};
`;

export default Header;