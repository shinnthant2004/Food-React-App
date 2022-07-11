import { CartItemContainer, SaleText } from "./cart-item.styles";

const CartItem = ({ cart }) => {
  const { img, price, quantity } = cart;
  return (
    <CartItemContainer>
      <img src={img} />
      <SaleText>
        <span>${price}</span>
        <span>{quantity} items</span>
      </SaleText>
    </CartItemContainer>
  );
};
export default CartItem;
