import { Profile } from './Profile/ProfileCard/Profile';
import user from './json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './json/data.json';
import { FriendsList } from './Friends/FriendsList/Friends';
import friends from './json/friends.json';
export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} titleText="upload text" />
      <FriendsList friends={friends} />
    </div>
  );
};
