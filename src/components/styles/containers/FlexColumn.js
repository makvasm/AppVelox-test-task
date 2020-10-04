import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${props => props.justify ? `justify-content: ${props.justify}` : ''};
  ${props => props.center ? 'align-items: flex-start' : ''};
`;

export default FlexColumn;