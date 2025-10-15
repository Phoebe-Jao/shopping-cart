import { createContext, useContext, useState } from 'react'

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity } : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const getQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    return item ? item.quantity : 0;
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }

  const cartCount = cartItems.length;

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getQuantity, getTotalPrice, cartCount }}>
    {children}
  </CartContext.Provider>
}