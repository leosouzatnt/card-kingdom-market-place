
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

// Mock product data - same as in ShopContent
const mockProducts = [
  {
    id: 1,
    name: "Dragão Branco de Olhos Azuis",
    edition: "1ª Edição",
    price: 499.99,
    image: "/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png",
    category: "Yu-Gi-Oh",
    stock: 3,
  },
  {
    id: 2,
    name: "Charizard",
    edition: "Edição Base",
    price: 789.99,
    image: "https://images.pokemontcg.io/base1/4_hires.png",
    category: "Pokémon",
    stock: 2,
  },
  {
    id: 3,
    name: "Black Lotus",
    edition: "Alpha",
    price: 25000.00,
    image: "https://cdn1.mtggoldfish.com/images/h/Black-Lotus-VMA-672.jpg",
    category: "Magic",
    stock: 1,
  },
  {
    id: 4,
    name: "Exodia, o Proibido",
    edition: "Legend of Blue Eyes White Dragon",
    price: 349.99,
    image: "https://ms.yugipedia.com//thumb/3/3a/ExodiatheForbiddenOne-MGED-EN-PGR-1E.png/300px-ExodiatheForbiddenOne-MGED-EN-PGR-1E.png",
    category: "Yu-Gi-Oh",
    stock: 4,
  },
  {
    id: 5,
    name: "Pikachu",
    edition: "Coleção Celebração 25 anos",
    price: 129.99,
    image: "https://den-cards.pokellector.com/239/Pikachu.S76.32387.png",
    category: "Pokémon",
    stock: 8,
  },
  {
    id: 6,
    name: "Jace, o Escultor de Mentes",
    edition: "Worldwake",
    price: 999.99,
    image: "https://product-images.tcgplayer.com/fit-in/437x437/42005.jpg",
    category: "Magic",
    stock: 2,
  },
];

const Cart = () => {
  // Simulating cart data from localStorage
  const [cartItems, setCartItems] = useState<{id: number, quantity: number}[]>([
    { id: 1, quantity: 1 },
    { id: 3, quantity: 1 }
  ]);
  const navigate = useNavigate();

  const getProductById = (id: number) => {
    return mockProducts.find(product => product.id === id);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const product = getProductById(id);
    if (!product) return;
    
    if (newQuantity > product.stock) {
      toast({
        title: "Quantidade indisponível",
        description: `Apenas ${product.stock} unidades disponíveis.`,
        variant: "destructive",
      });
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removido",
      description: "O item foi removido do carrinho.",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Compra finalizada!",
      description: `Pedido no valor de R$ ${calculateTotal().toFixed(2)} processado com sucesso.`,
    });
    setCartItems([]);
    navigate('/tracking');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Carrinho de Compras</h1>
          <p className="text-gray-600 mb-8">
            Revise seus itens e finalize sua compra.
          </p>
        </div>
      </div>
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-8">
              Explore nossa loja para encontrar as melhores cartas.
            </p>
            <Button onClick={() => navigate('/shop')}>Ir para a Loja</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-4">Itens no Carrinho</h2>
                  <div className="divide-y">
                    {cartItems.map((item) => {
                      const product = getProductById(item.id);
                      if (!product) return null;
                      
                      return (
                        <div key={item.id} className="py-4 flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium">
                                <h3>{product.name}</h3>
                                <p className="ml-4">R$ {product.price.toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{product.edition}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" /> Remover
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 h-min">
              <h2 className="text-lg font-bold mb-4">Resumo do Pedido</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>Grátis</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {calculateTotal().toFixed(2)}</span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Finalizar Compra
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
