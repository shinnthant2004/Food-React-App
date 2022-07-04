import styled from "styled-components";
import { Image } from "../../components/directory-item/directory-item.styles";
export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  ${Image} {
    width: 592px;
    height: 600px;
    margin-right: 100px;
  }
`;
