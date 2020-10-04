import styled from 'styled-components';
import variables from './Variables';

const CardIcon = styled.div`
  width: 25%;
  height: 100%;
  text-align: center;
  align-self: center;
  background-color: ${variables.colorSecondary};
  // background-color: ${props => props.active ? variables.colorSecondary : '#FFFFFF'};
`;

export default CardIcon;