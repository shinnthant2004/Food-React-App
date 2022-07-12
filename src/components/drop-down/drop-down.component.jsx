import {
  DropDownContainer,
  Ender,
  Header,
  ItemsContainer,
} from "./drop-down.styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
const DropDown = () => {
  const { cartOpen, setCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const toggleDropDownHandler = () => {
    setCartOpen(!cartOpen);
  };
  const navigateHandler = () => {
    navigate("/checkout");
    setCartOpen(!cartOpen);
  };
  return (
    <DropDownContainer>
      <Header>
        <p>Your Carts</p>
        <svg
          onClick={toggleDropDownHandler}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${20}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Header>
      <ItemsContainer>
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cart={item} />)}
      </ItemsContainer>
      <Ender>
        <span>Total : $ 500</span>
        <svg
          onClick={navigateHandler}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${26}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Ender>
    </DropDownContainer>
  );
};
export default DropDown;
