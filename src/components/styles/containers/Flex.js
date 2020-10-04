import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  width: 100%;
  ${props => props.padding ? 'padding: 20px;' : ''}
  ${props => props.justify ? `justify-content: ${props.justify};` : ''}
  ${props => props.center ? 'align-items: center;' : ''}
`;

export default Flex;