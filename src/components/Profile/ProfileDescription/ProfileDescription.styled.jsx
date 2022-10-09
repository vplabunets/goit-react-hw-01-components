import styled from 'styled-components';
export const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
`;
export const AvatarPicture = styled.img`
  border: 0.1px inset gray;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
export const Info = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
