import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import {
  ProductsContainer,
  LayoutProducts,
} from "../most-rated-products/most-rated-products.styles";
import SearchInput from "../../components/search-input/search-input.component";

const Category = () => {
  const { category } = useParams();
  const { categoryProducts } = useContext(CategoryContext);
  const [propProducts, setPropProducts] = useState(categoryProducts[category]);
  const [searchProducts, setSearchProducts] = useState(
    categoryProducts[category]
  );

  useEffect(() => {
    setPropProducts(categoryProducts[category]);
    setSearchProducts(categoryProducts[category]);
  }, [categoryProducts, category]);

  const searchHandler = (e) => {
    const { value } = e.target;
    const filterSearchProducts = propProducts.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchProducts(filterSearchProducts);
  };
  return (
    <LayoutProducts>
      <h2>{category.toUpperCase()}</h2>
      <SearchInput onChange={searchHandler} />
      <ProductsContainer>
        {searchProducts &&
          searchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {searchProducts && searchProducts.length < 1 && (
          <span>No items found !</span>
        )}
      </ProductsContainer>
    </LayoutProducts>
  );
};
export default Category;
