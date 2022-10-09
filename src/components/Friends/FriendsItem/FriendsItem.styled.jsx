import styled from 'styled-components';
export const FriendItem = styled.li`
  display: flex;
  width: 200px;
  border: 0.1px inset gray;
  align-items: center;
  background-color: #daf7ee;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const FriendStatus = styled.span`
  vertical-align: center;
  margin: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${friends => {
    if (friends.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
export const FriendAvatar = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
export const FriendName = styled.p`
  margin-left: 20px;
`;
