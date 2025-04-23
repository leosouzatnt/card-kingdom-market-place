import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useCart, getProductById } from '@/context/CartContext';

// Helper function to generate random tracking number
const generateTrackingNumber = () => {
  const prefix = 'BR';
  const numbers = Math.random().toString().slice(2, 11);
  const suffix = 'CD';
  return `${prefix}${numbers}${suffix}`;
};

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getCartTotal
  } = useCart();

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast({
      title: "Item removido",
      description: "O item foi removido do carrinho.",
    });
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const product = getProductById(id);
    // Assuming each product has a stock property in the mock data
    const stock = 10; // Default stock value if not found
    
    if (newQuantity > stock) {
      toast({
        title: "Quantidade indisponível",
        description: `Apenas ${stock} unidades disponíveis.`,
        variant: "destructive",
      });
      return;
    }
    
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    const trackingNumber = generateTrackingNumber();
    
    toast({
      title: "Compra finalizada!",
      description: `Pedido finalizado com sucesso! Seu número de rastreamento é: ${trackingNumber}`,
    });
    
    // Store tracking number in localStorage
    const trackingHistory = JSON.parse(localStorage.getItem('trackingHistory') || '[]');
    trackingHistory.push({
      trackingNumber,
      date: new Date().toISOString(),
      total: getCartTotal(),
    });
    localStorage.setItem('trackingHistory', JSON.stringify(trackingHistory));
    
    clearCart();
    navigate('/tracking', { state: { trackingNumber } });
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
                      
                      // Use mock product data for display
                      const productImages: Record<number, string> = {
                        1: "/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png",
                        2: "https://images.pokemontcg.io/base1/4_hires.png",
                        3: "https://cdn1.mtggoldfish.com/images/h/Black-Lotus-VMA-672.jpg",
                        4: "https://ms.yugipedia.com//thumb/3/3a/ExodiatheForbiddenOne-MGED-EN-PGR-1E.png/300px-ExodiatheForbiddenOne-MGED-EN-PGR-1E.png",
                        5: "https://den-cards.pokellector.com/239/Pikachu.S76.32387.png",
                        6: "https://product-images.tcgplayer.com/fit-in/437x437/42005.jpg",
                        7: "https://cdn1.mtggoldfish.com/images/h/Black-Lotus-VMA-672.jpg",
                        8: "https://product-images.tcgplayer.com/fit-in/437x437/42005.jpg",
                        9: "https://product-images.tcgplayer.com/fit-in/437x437/48521.jpg",
                        10: "https://m.media-amazon.com/images/I/81OMFV4gkdL._AC_UF1000,1000_QL80_.jpg",
                        11: "https://m.media-amazon.com/images/I/71L6wq6qIyL.jpg",
                        12: "https://http2.mlstatic.com/D_NQ_NP_882257-MLB50983646511_082022-O.webp",
                        13: "https://m.media-amazon.com/images/I/71KNgJandIL._AC_UF894,1000_QL80_.jpg",
                        14: "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280x1280/products/45656/107241/AT-13001__63742.1669800618.png",
                        15: "https://m.media-amazon.com/images/I/71kA6FWLItL._AC_UF894,1000_QL80_.jpg",
                        16: "https://m.media-amazon.com/images/I/81-q6RZmCvL._AC_UF1000,1000_QL80_.jpg",
                        17: "https://m.media-amazon.com/images/I/81GPXQc1ArL._AC_UF894,1000_QL80_.jpg",
                        18: "https://product-images.tcgplayer.com/fit-in/437x437/262645.jpg"
                      };
                      
                      const productImage = productImages[item.id] || 'https://placehold.co/200x200?text=Image+Not+Found';
                      const productEdition = "Edição Padrão"; // Default value
                      
                      return (
                        <div key={item.id} className="py-4 flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                              src={productImage}
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
                              <p className="mt-1 text-sm text-gray-500">{productEdition}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveItem(item.id)}
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
                  <span>R$ {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>Grátis</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {getCartTotal().toFixed(2)}</span>
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
