import { CartContainer, ItemCount, IconCart } from "./cart-icon.styles";
const CartIcon = () => {
  return (
    <CartContainer>
      <IconCart />
      <ItemCount>5</ItemCount>
    </CartContainer>
  );
};
export default CartIcon;
