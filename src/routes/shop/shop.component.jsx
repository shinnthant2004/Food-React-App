import { Routes, Route } from "react-router-dom";
import ShopLayout from "../../components/shop-layout/shop-layout.component";
import Category from "../category/category.component";
import MostRatedProducts from "../most-rated-products/most-rated-products.component";

const Shop = () => {
  return (
    <Routes>
      <Route element={<ShopLayout />}>
        <Route index element={<MostRatedProducts />} />
        <Route path=":category" element={<Category />} />
      </Route>
    </Routes>
  );
};
export default Shop;
