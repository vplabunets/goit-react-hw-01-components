import PropTypes from 'prop-types';
import { AvatarPicture, Card, Name, Info } from './ProfileDescription.styled';
export const Description = ({ username, tag, avatar, location }) => {
  return (
    <Card>
      <AvatarPicture src={avatar} alt={username} />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Card>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
