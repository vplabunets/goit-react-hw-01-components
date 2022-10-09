import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsText,
} from './ProfileStats.styled';
export const Stats = ({ stats }) => {
  console.log(Stats);
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

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
