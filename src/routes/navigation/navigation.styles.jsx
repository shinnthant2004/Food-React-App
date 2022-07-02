import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
export const LogoContainer = styled(Link)`
  width: 50px;
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 10px;
  }
`;
