import { Profile } from './Profile/Profile';
import user from './json/user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
