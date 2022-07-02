import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 80px;
  background-color: #fb923c;
`;
export const LogoContainer = styled(Link)`
  width: 165px;
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 20px;
    color: #fff;
    font-weight: 600;
  }
`;
