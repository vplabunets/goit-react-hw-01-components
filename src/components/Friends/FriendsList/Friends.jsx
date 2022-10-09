import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsItem/FriendsItem';
import { FrList, FrWrap } from './Friends.styled';
export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <FrWrap>
      <FrList>
        <FriendListItem friends={friends} />
      </FrList>
    </FrWrap>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
