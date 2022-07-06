import { useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
const MostRatedProducts = () => {
  const { mostRatedProducts } = useContext(CategoryContext);
  return (
    <div>
      <h2>Most rated products</h2>
      {mostRatedProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} />
        </div>
      ))}
    </div>
  );
};
export default MostRatedProducts;
