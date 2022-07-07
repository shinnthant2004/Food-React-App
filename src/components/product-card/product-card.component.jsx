import { ProductContainer } from "./product-card.styles";
import { AddCartButton } from "../add-to-cart-button/add-to-cart-button.styles";
const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  return (
    <ProductContainer>
      <img src={img} />
      <p>
        ${price} - {Number(price) + 2}
      </p>
      <span>{name}</span>
      <AddCartButton />
    </ProductContainer>
  );
};
export default ProductCard;
