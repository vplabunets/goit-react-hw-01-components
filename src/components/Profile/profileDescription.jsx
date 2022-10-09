import {
  AvatarPicture,
  Description1,
  Name,
  Info,
} from './ProfileDescription.styled';
export const Description = ({ username, tag, avatar, location }) => {
  // console.log(user);
  return (
    <Description1>
      <AvatarPicture src={avatar} alt={username} />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Description1>
  );
};
