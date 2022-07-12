import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  costTotal: 0,
  setCostTotal: () => null,
});

const addHelperFunction = (productToAdd, cartItems) => {
  const existProduct = cartItems.find((item) => productToAdd.id === item.id);
  if (existProduct) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeHelperFunction = (productToRemove, cartItems) => {
  const existProduct = cartItems.find((item) => productToRemove.id === item.id);
  if (existProduct && existProduct.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else {
    return cartItems.filter((cart) => cart.id !== productToRemove.id);
  }
};

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [costTotal, setCostTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, cart) => acc + cart.quantity, 0);
    setCartCount(total);
  }, [cartItems]);

  useEffect(() => {
    const cost = cartItems.reduce(
      (acc, cart) => acc + cart.price * cart.quantity,
      0
    );
    setCostTotal(cost);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addHelperFunction(productToAdd, cartItems));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeHelperFunction(productToRemove, cartItems));
  };

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    costTotal,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
