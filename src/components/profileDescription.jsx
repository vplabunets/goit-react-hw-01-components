import { user } from './user.json';
export const description = (
  <div class="description">
    <img src={user.avatar} alt="User avatar" class="avatar" />
    <p class="name">{user.username}</p>
    <p class="tag">@{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>
);
