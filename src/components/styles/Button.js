import styled from 'styled-components';
import variables from './Variables';

const Button = styled.button`
  background-color: ${variables.colorViolet};
  padding: 10px 15px;
  border-radius: ${variables.borderRadius};
  color: #FFFFFF;
  flex: 1;
`;

export default Button;