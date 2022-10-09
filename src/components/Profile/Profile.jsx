// import PropTypes from './prop-types';
import { Description } from './profileDescription';
import { Stats } from './profileStats';
import { ProfileCard } from './Profile.styled';
export const Profile = ({ user }) => {
  const { username, tag, avatar, location, stats } = user;
  return (
    <ProfileCard>
      <Description
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
      />
      <Stats stats={stats} />
    </ProfileCard>
  );
};

// Profile.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.object.isRequired,
//   }),
// };
