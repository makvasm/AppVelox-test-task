import styled from 'styled-components';
import variables from './Variables';

const Card = styled.div`
  position: relative;
  border-radius: ${variables.borderRadius};
  background-color: ${variables.layoutBackground};
  flex: 1;
  margin: 10px;

  min-height: 180px;
  min-width: 300px;
  max-width: 100%;
  max-height: 100%;

  padding: ${props => props.padding ? '20px' : '0'};
  
  box-shadow: ${variables.shadow};

  &:hover {
    border: 2px solid ${variables.colorSecondary};
  }
`;

export default Card;