import { Description } from './profileDescription';
import { Stats } from './profileStats';
import { ProfileCard } from './Profile.styled';
export const Profile = ({ user }) => {
  const { username, tag, avatar, location } = user;
  const { stats } = user;

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
