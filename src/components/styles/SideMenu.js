import styled from 'styled-components';
import variables from './Variables';

export const SideMenu = styled.div`
  width: ${variables.sideMenuWidth};
  min-height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: ${variables.colorDarkblue};
`;

export const SideMenuLink = styled.a`
  width: 100%;
  height: 100%;

  &:visited {
    color: #FFFFFF;
  }
  text-decoration: none;
  display: flex;
  // justify-content: stretch;
  align-items: center;
  gap: 10px;

  color: ${props => props.active ? variables.colorViolet : '#ffffff'};
`;

export const SideMenuElement = styled.div`
  width: 100%;
  height: 46px;

  gap: 10px;
  display: flex;
  // justify-content: stretch;
  align-items: center;

  margin-bottom: 10px;
  padding: 0 20px;
  border-left: ${props => props.active ? `3px solid ${variables.colorViolet}` : ''};
  background-color: ${props => props.active ? '#ffffff' : variables.colorDarkblue};

  &:hover {
    border-left: 3px solid ${variables.colorViolet};
    background-color: #ffffff;
    color: ${variables.colorViolet};
  }
  &:hover svg path, &:hover ${SideMenuLink}{
    fill: ${variables.colorViolet};
    color: ${variables.colorViolet};
  }
`;

export const SideMenuLogo = styled.div`
  width: 100%;
  height: ${variables.logoHeight};
  border-left: ${props => props.active ? `3px solid ${variables.colorViolet}` : ''};
  color: ${props => props.active ? variables.colorViolet : '#ffffff'}
  background-color: ${variables.colorDarkblue};
  overflow: hidden;
`;