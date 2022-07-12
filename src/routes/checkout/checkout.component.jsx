import { CheckoutContainer, Title, Total } from "./checkout.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, costTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <Title>Carts</Title>
      {cartItems &&
        cartItems.map((cart) => <CheckoutItem key={cart.id} cart={cart} />)}
      <Total>Total : $ {costTotal}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
