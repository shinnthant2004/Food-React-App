import { Fragment, useContext } from "react";
import MostRatedProduct from "../../components/most-rated-product/most-rated-product.component";
import { CategoryContext } from "../../contexts/category.context";
import { ProductsContainer } from "./most-rated-products.styles";
const MostRatedProducts = () => {
  const { mostRatedProducts } = useContext(CategoryContext);
  return (
    <Fragment>
      <h2>Most rated products</h2>
      <ProductsContainer>
        {mostRatedProducts.map((product) => (
          <MostRatedProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Fragment>
  );
};
export default MostRatedProducts;
