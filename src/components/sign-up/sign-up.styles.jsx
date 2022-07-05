import styled from "styled-components";
import { Title } from "../directory/directory.styles";
import { GoogleSignInButton } from "../google-button/google-button.styles";
export const SignUpContainer = styled.div`
  width: 430px;
  background-color: #d6d3d1;
  padding: 30px 32px;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  ${GoogleSignInButton} {
    margin-top: 20px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Title} {
    color: #000;
    margin: 0;
    font-size: 17px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;
export const AuthChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-decoration: none;
    color: #2563eb;
    font-weight: bold;
    font-size: 14px;
    margin-right: 8px;
  }
  span {
    color: #000;
    font-weight: 500;
    font-size: 14px;
  }
`;
