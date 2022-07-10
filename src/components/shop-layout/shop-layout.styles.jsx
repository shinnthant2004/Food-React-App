import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  width: 1280px;
  display: flex;
  margin: auto;
`;

export const Sidebar = styled.div`
  margin-right: 50px;
  margin-top: 145px;
  background-color: #d4d4d8;
  width: 200px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  border-radius: 5px;
  text-align: start;
  span {
    font-size: 13px;
    font-weight: 500;
  }
`;
export const CategoryList = styled(Link)`
  padding: 20px 15px;
  border-bottom: 2px solid black;
  display: block;
`;
