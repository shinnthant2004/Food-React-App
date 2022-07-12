import { CartContainer, ItemCount, IconCart } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);
  const toggleDropDownHandler = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <CartContainer onClick={toggleDropDownHandler}>
      <IconCart />
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};
export default CartIcon;
