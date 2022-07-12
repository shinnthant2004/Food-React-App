import {
  CheckoutItemContainer,
  Description,
  Image,
  ActionContainer,
  Price,
  ActionButton,
  Trash,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cart }) => {
  const { addItemToCart, removeItemFromCart, removeCart } =
    useContext(CartContext);
  const { img, name, price, quantity } = cart;
  const addHandler = () => {
    addItemToCart(cart);
  };
  const removeHandler = () => {
    removeItemFromCart(cart);
  };
  const clearItem = () => {
    removeCart(cart);
  };
  return (
    <CheckoutItemContainer>
      <Image imageUrl={img} />
      <Description>
        <span>{name}</span>
        <p>$ {price}</p>
        <p>In stock</p>
      </Description>
      <ActionContainer>
        <ActionButton onClick={removeHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: `${24}px` }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 12H4" />
          </svg>
        </ActionButton>
        <span>{quantity}</span>
        <ActionButton onClick={addHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: `${24}px` }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </ActionButton>
      </ActionContainer>
      <Price>${price * quantity}</Price>
      <Trash onClick={clearItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${24}px` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </Trash>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
