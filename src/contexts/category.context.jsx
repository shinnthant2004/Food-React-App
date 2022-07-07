import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  mostRatedProducts: [],
  categoryProducts: [],
  setCategoryProducts: () => null,
  setMostRatedProducts: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [mostRatedProducts, setMostRatedProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const products = await getCollectionAndDocuments("rated_products");
      setMostRatedProducts(products);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const categoryProducts = await getCollectionAndDocuments("products");
      setCategoryProducts(categoryProducts);
      console.log(categoryProducts);
    };
    getData();
  }, []);

  const value = {
    mostRatedProducts,
    setMostRatedProducts,
    categoryProducts,
    setCategoryProducts,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
