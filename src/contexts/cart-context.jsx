import React, { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  setCartItems: () => {},
  setCartTotal: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  resetCartItems: () => {},
  isItemInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const resetCartItems = () => setCartItems([]);

  const isItemInCart = (cartItem) =>
    [...cartItems.map((item) => item.title)].includes(cartItem.title);

  useEffect(() => {
    const totalCartItem = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,
      0
    );
    setCartTotal(totalCartItem.toFixed(2));
  }, [cartItems]);
  useEffect(() => {
    const countCartItem = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(countCartItem);
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    resetCartItems,
    isItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
