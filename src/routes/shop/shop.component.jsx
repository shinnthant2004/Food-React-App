import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import MostRatedProducts from "../most-rated-products/most-rated-products.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<MostRatedProducts />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
