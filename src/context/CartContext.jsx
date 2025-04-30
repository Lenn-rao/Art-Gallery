import React, { createContext, useState, useContext, useMemo } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart (or increase quantity if exists)
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Increase quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    console.log("Added to cart:", product.name); // For debugging
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
     console.log("Removed from cart ID:", productId); // For debugging
  };

  // Decrease item quantity (or remove if quantity becomes 0)
   const decreaseQuantity = (productId) => {
     setCartItems(prevItems => {
       const existingItem = prevItems.find(item => item.id === productId);
       if (existingItem && existingItem.quantity > 1) {
         return prevItems.map(item =>
           item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
         );
       } else {
         // Remove item if quantity is 1 or less
         return prevItems.filter(item => item.id !== productId);
       }
     });
     console.log("Decreased quantity for ID:", productId); // For debugging
   };

  // Calculate total items in cart
  const totalItems = useMemo(() => {
       return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Calculate total price
   const totalPrice = useMemo(() => {
       return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
   }, [cartItems]);

  // Value provided by the context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity, // Add this
    totalItems,
    totalPrice, // Add this
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}