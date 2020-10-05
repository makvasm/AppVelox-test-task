import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  ${props => props.justify ? `justify-content: ${props.justify};` : ''}
  ${props => props.center ? 'align-items: flex-start;' : ''}
  ${props => props.scrollable ? 'overflow-y: auto;' : ''}
`;

export default FlexColumn;