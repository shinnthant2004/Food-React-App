import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LinkContainer,
  LogoContainer,
} from "./navigation.styles";
const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
          <span>Foodie Bochi</span>
        </LogoContainer>
        <LinkContainer>
          <Link to="/shop">Shop</Link>
          <Link to="/auth">Sign In</Link>
          <Link to="/user">User</Link>
          <Link to="/carts">Carts</Link>
        </LinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
