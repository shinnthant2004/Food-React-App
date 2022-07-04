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
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
          {currentUser ? (
            <div>
              <span to="/" onClick={signOutHandler}>
                Sign Out
              </span>
              <Link to="/user">{currentUser}</Link>
            </div>
          ) : (
            <Link to="/auth">Sign In</Link>
          )}

          <Link to="/carts">Carts</Link>
        </LinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
