import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import SearchInput from "../../components/search-input/search-input.component";
import { CategoryContext } from "../../contexts/category.context";
import {
  ProductsContainer,
  LayoutProducts,
} from "./most-rated-products.styles";
const MostRatedProducts = () => {
  const { mostRatedProducts } = useContext(CategoryContext);
  const [filterProducts, setFilterProducts] = useState(mostRatedProducts);
  const [searchField, setSearchField] = useState(null);

  useEffect(() => {
    const newFilterProducts = mostRatedProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchField);
    });
    setFilterProducts(newFilterProducts);
  }, [searchField, mostRatedProducts]);

  useEffect(() => {
    setFilterProducts(mostRatedProducts);
  }, []);

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <LayoutProducts>
      <h2>MOST RATED PRODUCTS</h2>
      <SearchInput onChange={onSearchChange} />
      <ProductsContainer>
        {filterProducts &&
          filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {filterProducts && filterProducts.length < 1 ? (
          <span>No items found !</span>
        ) : (
          ""
        )}
      </ProductsContainer>
    </LayoutProducts>
  );
};
export default MostRatedProducts;
