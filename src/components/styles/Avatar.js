import styled from 'styled-components';
import variables from './Variables';

const Avatar = styled.img`
  width: ${variables.avatarSize};
  height: ${variables.avatarSize};
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  padding: 1px;
`;

export default Avatar;