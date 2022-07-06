import { Routes, Route } from "react-router-dom";
import MostRatedProducts from "../most-rated-products/most-rated-products.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<MostRatedProducts />} />
    </Routes>
  );
};
export default Shop;
