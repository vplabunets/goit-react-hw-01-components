import styled from 'styled-components';
const xxx = function rcolor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

export const StatisticsSection = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  border: 0.1px inset gray;
  background-color: ${xxx};
  flex-direction: column;
  width: calc(200px / 5);
`;
export const StatisticsTitle = styled.h2`
  width: 200px;
  border: 0.1px inset gray;
  color: black;
  font-size: 18px;
  font-weight: 600;
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
