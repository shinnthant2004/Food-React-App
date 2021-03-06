import { Link } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../../components/cart-icon/cart-icon.component";

export const Profile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-size: 100%;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const DefaultProfile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: 100%;
  background-position: center;
  background-image: url("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg");
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 80px;
  background-color: #fb923c;
  & ~ div {
    padding: 50px;
  }
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
  & > div:last-child {
    margin-left: 20px;
  }
`;
export const Username = styled.span`
  width: 100px;
  margin: 0 20px;
`;
