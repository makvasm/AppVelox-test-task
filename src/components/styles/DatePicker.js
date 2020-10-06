import styled from 'styled-components';
import variables from './Variables';

export const Wrapper = styled.div`
  border-radius: ${variables.borderRadius};
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  color: #FFFFFF;
  background-color: ${variables.colorViolet};
  gap: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(25px, 75px);
  
  padding: 10px;
  background-color: #EBE7FF;
`;

export const Day = styled.div`
  background-color: #FFFFFF;
  padding: 10px;
`;

export const WeekDay = styled.div`
  text-align: center;
`;