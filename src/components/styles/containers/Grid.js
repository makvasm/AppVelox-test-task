import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: ${props => props.cols ? `repeat(${props.cols}, 1fr)` : '1fr'};
  grid-template-rows: ${props => props.rows ? `repeat(${props.rows}, 1fr)` : '1fr'};
  ${props => props.padding ? 'padding: 20px;' : ''}
`;

export default Grid;