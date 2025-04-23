
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useCart } from '@/context/CartContext';

// Mock product data with updated images and names
const mockProducts = [
  {
    id: 1,
    name: "Dragão Branco de Olhos Azuis",
    edition: "LOB-001 - 1ª Edição",
    price: 499.99,
    image: "/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png",
    category: "Yu-Gi-Oh",
    stock: 3,
  },
  {
    id: 2,
    name: "Charizard Base Set",
    edition: "Base Set 4/102",
    price: 789.99,
    image: "https://product-images.tcgplayer.com/fit-in/437x437/84032.jpg",
    category: "Pokémon",
    stock: 2,
  },
  {
    id: 3,
    name: "Black Lotus",
    edition: "Alpha Edition",
    price: 25000.00,
    image: "https://product-images.tcgplayer.com/fit-in/437x437/8094.jpg",
    category: "Magic",
    stock: 1,
  },
  {
    id: 4,
    name: "Exodia, o Proibido",
    edition: "LOB-124 - Legend of Blue Eyes White Dragon",
    price: 349.99,
    image: "https://product-images.tcgplayer.com/fit-in/437x437/183851.jpg",
    category: "Yu-Gi-Oh",
    stock: 4,
  },
  {
    id: 5,
    name: "Pikachu VMax",
    edition: "SWSH062 - Celebrations",
    price: 129.99,
    image: "https://product-images.tcgplayer.com/fit-in/437x437/249318.jpg",
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

const ShopContent = () => {
  const navigate = useNavigate();
  const { addToCart, getCartQuantity } = useCart();
  
  const handleAddToCart = (productId: number) => {
    addToCart(productId);
    
    toast({
      title: "Produto adicionado ao carrinho!",
      description: "Confira seu carrinho para finalizar a compra.",
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Produtos em Destaque</h2>
        <Button variant="outline" onClick={() => navigate('/cart')}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          <span>Carrinho ({getCartQuantity()})</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute top-2 right-2">
                  {product.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-sm text-gray-500 mb-2">{product.edition}</p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.stock} em estoque</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                onClick={() => handleAddToCart(product.id)} 
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" /> Adicionar ao Carrinho
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
