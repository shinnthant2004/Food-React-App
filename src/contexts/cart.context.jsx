import { createContext, useState } from "react";

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
});

const addHelperFunction = (productToAdd, cartItems) => {
  const existProduct = cartItems.find((item) => item.id === productToAdd.id);
  if (existProduct) {
    return cartItems.map((item) => {
      return item.id === existProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item };
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addHelperFunction(productToAdd, cartItems));
  };

  const value = { cartOpen, setCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
