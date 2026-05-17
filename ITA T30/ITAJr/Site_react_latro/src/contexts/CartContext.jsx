import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addCoffeeToCart(coffee, quantity) {
    setCartItems((state) => {
      const coffeeAlreadyInCart = state.findIndex(item => item.id === coffee.id);
      if (coffeeAlreadyInCart >= 0) {
        const newState = [...state];
        newState[coffeeAlreadyInCart].quantity += quantity;
        return newState;
      } else {
        return [...state, { ...coffee, quantity }];
      }
    });
  }

  function removeCoffeeFromCart(coffeeId) {
    setCartItems((state) => {
      const coffeeIndex = state.findIndex(item => item.id === coffeeId);
      if (coffeeIndex >= 0) {
        const newState = [...state];
        if (newState[coffeeIndex].quantity > 1) {
          newState[coffeeIndex].quantity -= 1;
          return newState;
        } else {
          return state.filter(item => item.id !== coffeeId);
        }
      }
      return state;
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, removeCoffeeFromCart, clearCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}