import React, { createContext, useContext, useState } from 'react';
import { Pizza } from '@/types/menu';

export interface CartItem extends Pizza {
  quantity: number;
  selectedSize: 'small' | 'medium' | 'large';
}

interface CartContextType {
  items: CartItem[];
  addToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large') => void;
  removeFromCart: (itemId: number, size: string) => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (pizza: Pizza, size: 'small' | 'medium' | 'large') => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.id === pizza.id && item.selectedSize === size
      );

      if (existingItem) {
        return currentItems.map(item =>
          item.id === pizza.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...pizza, quantity: 1, selectedSize: size }];
    });
  };

  const removeFromCart = (itemId: number, size: string) => {
    setItems(items => items.filter(item => 
      !(item.id === itemId && item.selectedSize === size)
    ));
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const priceModifier = item.selectedSize === 'small' ? -2 : item.selectedSize === 'large' ? 4 : 0;
      return total + ((item.price + priceModifier) * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getCartCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
