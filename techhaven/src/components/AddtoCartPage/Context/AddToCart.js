import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  //   setCartCount(cartCount + 1);
  // };

  // Function to add items to the cart
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === newItem.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: Math.min(item.stock, item.quantity + 1) }
            : item
        );
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Function to update the quantity of an item
  const updateQuantity = (itemId, change) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.min(item.stock, Math.max(1, item.quantity + change)) }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const overallSubtotal = cart.reduce(
    (total, item) => total + item.discount_price * item.quantity,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount: cart.reduce((acc, item) => acc + item.quantity, 0), addToCart, updateQuantity, removeFromCart, overallSubtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
