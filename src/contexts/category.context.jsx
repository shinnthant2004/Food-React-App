import { createContext, useEffect, useState } from "react";
import {
  getCollectionAndDocuments,
  getCollectionAndDocumentsRated,
} from "../utils/firebase/firebase.utils";

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
      const products = await getCollectionAndDocumentsRated("rated_products");
      setMostRatedProducts(products);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData2 = async () => {
      const categoryProducts = await getCollectionAndDocuments("products");
      setCategoryProducts(categoryProducts);
    };
    getData2();
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
