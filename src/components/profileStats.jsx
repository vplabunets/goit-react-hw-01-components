import user from './user.json';
export const stats = (
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
);
