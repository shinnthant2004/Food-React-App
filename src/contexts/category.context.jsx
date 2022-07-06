import { createContext, useEffect, useState } from "react";
import { createCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import Most_rated_Products from "../most_rated";
export const CategoryContext = createContext({
  name: null,
  setName: () => null,
});
export const CategoryProvider = ({ children }) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    const addCollection = async () => {
      await createCollectionAndDocuments("rated_products", Most_rated_Products);
    };
    addCollection();
  }, []);
  const value = { name };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
