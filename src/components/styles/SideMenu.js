import styled from 'styled-components';
import variables from './Variables';

export const SideMenu = styled.div`
  min-width: 210px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: ${variables.colorPrimary};
`;

export const SideMenuElement = styled.a`
  width: 100%;
  height: 46px;

  display: grid;
  grid-template-columns: 10% 90%;
  gap: 10px;
  align-items: center;

  margin-bottom: 10px;
  padding: 0 20px;
  border-left: ${props => props.active ? `3px solid ${variables.colorAdditional}` : ''};
  color: ${props => props.active ? variables.colorAdditional : '#ffffff'};

  background-color: ${props => props.active ? '#ffffff' : variables.colorPrimary};

  &:hover {
    border-left: 3px solid ${variables.colorAdditional};
    color: ${variables.colorAdditional};
    background-color: #ffffff;
  }
`;

export const SideMenuLogo = styled.div`
  width: 100%;
  height: 55px;
  border-left: ${props => props.active ? `3px solid ${variables.colorAdditional}` : ''};
  color: ${props => props.active ? variables.colorAdditional : '#ffffff'}
  background-color: ${variables.colorPrimary};
  overflow: hidden;
`;