import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import {
  ProductsContainer,
  LayoutProducts,
} from "../most-rated-products/most-rated-products.styles";
const Category = () => {
  const { category } = useParams();
  const { categoryProducts } = useContext(CategoryContext);
  const [filteredProducts, setFilteredProducts] = useState(
    categoryProducts[category]
  );
  useEffect(() => {
    setFilteredProducts(categoryProducts[category]);
    console.log(filteredProducts);
  }, [categoryProducts, category]);
  return (
    <LayoutProducts>
      <h2>{category}</h2>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </LayoutProducts>
  );
};
export default Category;
