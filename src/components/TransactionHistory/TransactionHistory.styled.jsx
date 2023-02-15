import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 14px;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: whitesmoke;
  }
`;
export const Th = styled.th`
  width: 150px;
  text-align: center;
  background-color: turquoise;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  text-shadow: 0 1px 1px #2d2020;
  padding: 15px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-right: none;
  }
`;
export const Td = styled.td`
  width: 150px;
  text-align: center;
  color: grey;
  font-size: 16px;
  text-transform: capitalize;
  padding: 15px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  &:last-child {
    border-right: none;
  }
`;
