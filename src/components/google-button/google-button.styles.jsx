import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const GoogleSignInButton = styled(BaseButton)`
  margin: 0;
  background-color: #2563eb;
  &:hover {
    color: #2563eb;
  }
`;
export const GoogleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 22px;
  }
`;
