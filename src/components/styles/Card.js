import styled from 'styled-components';
import CardIcon from './CardIcon';
import SplitLine from './SplitLine';
import variables from './Variables';

const Card = styled.div`
  position: relative;
  border-radius: ${variables.borderRadius};
  border: 2px solid transparent;
  background-color: ${variables.layoutBackground};
  margin: 10px;
  flex: 1;
  overflow: hidden;

  min-height: 180px;
  min-width: 300px;

  padding: ${props => props.padding ? '20px' : '0'};
  
  box-shadow: ${variables.shadow};

  &:hover ${CardIcon}, &:hover ${SplitLine} {
    background-color: ${variables.colorBlue};
  }
  &:hover {
    border: 2px solid ${variables.colorBlue};
  }
`;

export default Card;