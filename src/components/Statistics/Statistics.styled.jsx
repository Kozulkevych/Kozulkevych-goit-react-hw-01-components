import styled from 'styled-components';

export const Section = styled.section`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StatTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 0;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 0;
  padding: 0;
  height: 80px;
  color: #fff;
`;
export const Item = styled.li`
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.bgColor};
`;
export const Label = styled.span`
  font-weight: 600;
  color: #e9e4e4;
  text-shadow:rgba(0, 0, 0, 0.5);
`;
export const Percentage = styled.span`
  font-size: 22px;
  color:  #e9e4e4;
  text-shadow:rgba(0, 0, 0, 0.5);
`;
