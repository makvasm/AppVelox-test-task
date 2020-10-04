import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  max-height: 100%;
  grid-template-columns: ${props => props.cols ? `repeat(${props.cols}, 1fr)` : '1fr'};
  ${props => props.padding ? 'padding: 20px;' : ''}
`;

export default Grid;