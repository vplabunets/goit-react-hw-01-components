import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #dddcdc;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 0.1px inset gray;
  width: 33%;
`;
export const StatsLabel = styled.span`
  font-size: 12px;
`;
export const StatsText = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
