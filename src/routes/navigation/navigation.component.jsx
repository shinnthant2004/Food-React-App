import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LinkContainer,
  LogoContainer,
  Profile,
  DefaultProfile,
  Username,
} from "./navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
const Navigation = () => {
  const { currentUserName, currentUserProfile } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
          <span>Foodie Bochi</span>
        </LogoContainer>
        <LinkContainer>
          <Link to="/shop">Shop</Link>

          {currentUserName ? (
            <div>
              <span onClick={signOutHandler}>Sign Out</span>
              <Username>{currentUserName}</Username>
            </div>
          ) : (
            <Link to="/auth">Sign In</Link>
          )}
          {currentUserProfile ? (
            <div>
              <Profile imageUrl={currentUserProfile} />
            </div>
          ) : (
            <div>
              <DefaultProfile />
            </div>
          )}
          <CartIcon />
        </LinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
