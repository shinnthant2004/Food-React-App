import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  right: 20px;
  z-index: 4;
  background: #fb923c;
  color: #fff;
  font-weight: 500;
  width: 200px;
  height: 311px;
  border-radius: 9px;
  top: 67px;
  padding: 10px 15px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 11px;
    font-weight: 500;
    background-color: #e4e4e7;
    padding: 5px 10px;
    border-radius: 10px;
    color: #000;
  }
`;
export const ItemsContainer = styled.div`
  height: 213px;
  overflow: scroll;
  background: #e4e4e7;
  border-radius: 7px;
  margin: 14px 0;
  padding: 5px 14px;
`;

export const Ender = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 13px;
    font-weight: bold;
    padding: 4px 7px;
    border-radius: 7px;
    background: #e4e4e7;
    color: #000;
  }
`;
