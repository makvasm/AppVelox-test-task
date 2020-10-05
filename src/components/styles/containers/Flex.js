import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // align-self: stretch;
  ${props => props.padding ? 'padding: 20px;' : ''}
  ${props => props.justify ? `justify-content: ${props.justify};` : ''}
  ${props => props.center ? 'align-items: center;' : ''}
  ${props => props.scrollable ? 'overflow-y: auto;' : ''}
`;

export default Flex;