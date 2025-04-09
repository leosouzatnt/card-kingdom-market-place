
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartQuantity: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Mock product data for calculating prices
const mockProducts = [
  {
    id: 1,
    name: "Dragão Branco de Olhos Azuis",
    price: 499.99,
  },
  {
    id: 2,
    name: "Charizard",
    price: 789.99,
  },
  {
    id: 3,
    name: "Black Lotus",
    price: 25000.00,
  },
  {
    id: 4,
    name: "Exodia, o Proibido",
    price: 349.99,
  },
  {
    id: 5,
    name: "Pikachu",
    price: 129.99,
  },
  {
    id: 6,
    name: "Jace, o Escultor de Mentes",
    price: 999.99,
  },
  {
    id: 7,
    name: "Black Lotus",
    price: 25000.00,
  },
  {
    id: 8,
    name: "Jace, o Escultor de Mentes",
    price: 999.99,
  },
  {
    id: 9,
    name: "Liliana do Véu",
    price: 799.99,
  },
  {
    id: 10,
    name: "Dragonoid Maximus",
    price: 149.99,
  },
  {
    id: 11,
    name: "Hydorous Ultra",
    price: 89.99,
  },
  {
    id: 12,
    name: "Deck Iniciante Bakugan",
    price: 119.99,
  },
  {
    id: 13,
    name: "Pasta para Cards",
    price: 89.99,
  },
  {
    id: 14,
    name: "Sleeves Premium",
    price: 29.99,
  },
  {
    id: 15,
    name: "Playmat Profissional",
    price: 129.99,
  },
  {
    id: 16,
    name: "Booster Box Pokémon",
    price: 599.99,
  },
  {
    id: 17,
    name: "Estrutural Yu-Gi-Oh!",
    price: 89.99,
  },
  {
    id: 18,
    name: "Bundle Magic",
    price: 149.99,
  }
];

export const getProductById = (id: number) => {
  return mockProducts.find(product => product.id === id);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { id: productId, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getCartTotal,
      getCartQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
