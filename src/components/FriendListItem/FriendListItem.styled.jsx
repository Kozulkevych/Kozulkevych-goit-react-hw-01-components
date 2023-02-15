import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  padding: 10px 20px;
  gap: 20px;
`;
export const UserStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    if (p.bgColor === 'true') {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
export const UserAvatar = styled.img`
  height: 50px;
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;
export const UserName = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;
