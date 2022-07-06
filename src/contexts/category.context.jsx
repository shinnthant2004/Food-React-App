import { createContext, useEffect, useState } from "react";
import {
  createCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";
import Most_rated_Products from "../most_rated";

export const CategoryContext = createContext({
  mostRatedProducts: [],
  setMostRatedProducts: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [mostRatedProducts, setMostRatedProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const products = await getCollectionAndDocuments("rated_products");
      setMostRatedProducts(products);
    };
    getData();
  }, []);

  const value = { mostRatedProducts, setMostRatedProducts };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
