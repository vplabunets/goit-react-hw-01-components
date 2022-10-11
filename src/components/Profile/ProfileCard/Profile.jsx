import PropTypes from 'prop-types';
import { Description } from '../ProfileDescription/profileDescription';
import { Stats } from '../ProfileStatistics/profileStats';
import { ProfileCardWrap } from './Profile.styled';
export const Profile = ({ user }) => {
  const { username, tag, avatar, location, stats } = user;

  return (
    <ProfileCardWrap>
      <Description
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
      />
      <Stats stats={stats} />
    </ProfileCardWrap>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
