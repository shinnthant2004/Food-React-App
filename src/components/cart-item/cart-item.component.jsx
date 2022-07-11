import { CartItemContainer, SaleText } from "./cart-item.styles";

const CartItem = ({ cart }) => {
  return (
    <CartItemContainer>
      <img src="https://tse4.mm.bing.net/th?id=OIP.V5rlD0gK_Tp1IYguGIboTAHaHa&pid=Api&P=0&w=167&h=167" />
      <SaleText>
        <span>$500</span>
        <span>5 Items</span>
      </SaleText>
    </CartItemContainer>
  );
};
export default CartItem;
