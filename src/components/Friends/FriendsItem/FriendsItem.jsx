import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendsItem.styled';
export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, id, isOnline, name }) => (
    <FriendItem key={id}>
      <FriendStatus status={isOnline} />
      <FriendAvatar class="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName class="name">{name}</FriendName>
    </FriendItem>
  ));
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),

  titleText: PropTypes.string,
};
