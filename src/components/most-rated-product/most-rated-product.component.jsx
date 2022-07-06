import { ProductContainer } from "./most-rated-product.styles";
import { AddCartButton } from "../add-to-cart-button/add-to-cart-button.styles";
const MostRatedProduct = ({ product }) => {
  const { name, image, price } = product;
  return (
    <ProductContainer>
      <img src={image} />
      <p>
        ${price} - {Number(price) + 2}
      </p>
      <span>{name}</span>
      <AddCartButton />
    </ProductContainer>
  );
};
export default MostRatedProduct;
