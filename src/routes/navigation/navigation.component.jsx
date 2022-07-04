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
} from "./navigation.styles";
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
          <Link to="/carts">Carts</Link>

          {currentUserName ? (
            <div>
              <span onClick={signOutHandler}>Sign Out</span>
              <span>{currentUserName}</span>
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
        </LinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
