import { CheckoutContainer, Title, Total } from "./checkout.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <Title>Carts</Title>
      {cartItems &&
        cartItems.map((cart) => <CheckoutItem key={cart.id} cart={cart} />)}
      <Total>Total : $ 5000</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
