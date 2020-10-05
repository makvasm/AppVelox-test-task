import styled from 'styled-components';
import variables from '../Variables';

export const Container = styled.div`
  box-sizing: border-box;
  width: calc(100% - ${variables.sideMenuWidth});
  height: 100%;
  margin-left: ${variables.sideMenuWidth};
  overflow: hidden;
`;

export default Container;