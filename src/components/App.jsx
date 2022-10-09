import { Profile } from './Profile/Profile';
import user from './json/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './json/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} title="upload text" />
    </div>
  );
};
