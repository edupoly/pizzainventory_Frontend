
import React, { createContext, useContext, useEffect, useState } from 'react';
import socket from '../socketService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    socket.emit('update-cart', newCart);
  };

  const clearCart = () => {
    setCart([]);
    socket.emit('update-cart', []);
  };

  useEffect(() => {
    socket.on('cart-updated', (sharedCart) => {
      setCart(sharedCart);
    });

    return () => {
      socket.off('cart-updated');
    };
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
