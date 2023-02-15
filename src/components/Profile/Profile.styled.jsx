import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 330px;
  height: 420px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0;
`;
export const ProfileImg = styled.img`
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
`;
export const ProfileName = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: black;
  margin: 0 0 10px 0;
`;
export const ProfileTag = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  margin: 0 0 10px 0;
`;
export const ProfileLocation = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  margin: 0 0 10px 0;
`;
export const StatsList = styled.ul`
  background-color: #f3f6f9;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
  height: 30%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:not(:last-child) {
    border-right: 1px solid #dddddd;
  }
`;
export const Label = styled.span`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: 800;
  font-size: 18px;
`;
