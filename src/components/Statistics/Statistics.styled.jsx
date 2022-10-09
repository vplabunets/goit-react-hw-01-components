import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatisticsList = styled.ul`
  height: 200px;
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(200px / 5);
  background-color: random;
`;
export const StatisticsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const StatisticsLabel = styled.span`
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
export const StatisticsPercentage = styled.span`
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
