import { ProductContainer } from "./product-card.styles";
import { AddCartButton } from "../add-to-cart-button/add-to-cart-button.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addItemHandler = () => {
    addItemToCart(product);
  };
  return (
    <ProductContainer>
      <img src={img} />
      <p>
        ${price} - {Number(price) + 2}
      </p>
      <span>{name}</span>
      <AddCartButton onClick={addItemHandler} />
    </ProductContainer>
  );
};
export default ProductCard;
