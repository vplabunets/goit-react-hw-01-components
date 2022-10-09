import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsText,
} from './ProfileStats.styled';
export const Stats = ({ stats }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsText>{stats.followers}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsText>{stats.views}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsText>{stats.likes}</StatsText>
      </StatsItem>
    </StatsList>
  );
};
