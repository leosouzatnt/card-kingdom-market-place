
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import CardDetail from "./CardDetail";
import { useCart } from "../context/CartContext";
import { toast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  edition: string;
  rarity: string;
  price: number;
  description: string;
}

const ProductCategoryDisplay = ({ category }: { category: string | undefined }) => {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedCards = localStorage.getItem('registeredCards');
    if (storedCards) {
      const parsedCards = JSON.parse(storedCards) as Product[];
      const filteredProducts = category
        ? parsedCards.filter(product => product.category === category)
        : parsedCards;
      setProducts(filteredProducts);
    }
  }, [category]);

  const handleAddToCart = (productId: string) => {
    // Convert string ID to number (needed for cart context)
    const numericId = parseInt(productId, 10);
    if (!isNaN(numericId)) {
      addToCart(numericId);
      toast({
        title: "Produto adicionado!",
        description: "O produto foi adicionado ao seu carrinho.",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-[100%]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedCard(product)}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">Edição: {product.edition}</p>
              <p className="text-sm text-gray-600">Raridade: {product.rarity}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-gray-700">R$ {product.price.toFixed(2)}</span>
                <Button size="sm" onClick={() => handleAddToCart(product.id)}>Adicionar</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <CardDetail
          card={selectedCard}
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default ProductCategoryDisplay;
