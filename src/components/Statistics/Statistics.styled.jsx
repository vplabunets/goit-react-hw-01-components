import styled from 'styled-components';
const xxx = function rcolor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

export const StatisticsSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  background-color: ${xxx};
  flex-direction: column;
  width: calc(200px / 5);
`;
export const StatisticsTitle = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const StatisticsLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

export const StatisticsPercentage = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
