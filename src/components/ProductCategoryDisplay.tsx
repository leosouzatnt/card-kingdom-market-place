
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { useCart } from '@/context/CartContext';

// Mock product data organized by category
const productsByCategory = {
  pokemon: [
    {
      id: 1,
      name: "Charizard",
      edition: "Edição Base",
      price: 789.99,
      image: "https://images.pokemontcg.io/base1/4_hires.png",
      stock: 2,
    },
    {
      id: 2,
      name: "Pikachu",
      edition: "Coleção Celebração 25 anos",
      price: 129.99,
      image: "https://den-cards.pokellector.com/239/Pikachu.S76.32387.png",
      stock: 8,
    },
    {
      id: 3,
      name: "Mewtwo GX",
      edition: "Edição Especial",
      price: 299.99,
      image: "https://product-images.tcgplayer.com/fit-in/437x437/215849.jpg",
      stock: 3,
    }
  ],
  yugioh: [
    {
      id: 4,
      name: "Dragão Branco de Olhos Azuis",
      edition: "1ª Edição",
      price: 499.99,
      image: "/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png",
      stock: 3,
    },
    {
      id: 5,
      name: "Exodia, o Proibido",
      edition: "Legend of Blue Eyes White Dragon",
      price: 349.99,
      image: "https://ms.yugipedia.com//thumb/3/3a/ExodiatheForbiddenOne-MGED-EN-PGR-1E.png/300px-ExodiatheForbiddenOne-MGED-EN-PGR-1E.png",
      stock: 4,
    },
    {
      id: 6,
      name: "Mago Negro",
      edition: "Ultra Rara",
      price: 189.99,
      image: "https://static.cardmarket.com/img/7898fdabb4843cc0c797e694f725cf5f/items/1/YGLD/267251.jpg",
      stock: 5,
    }
  ],
  magic: [
    {
      id: 7,
      name: "Black Lotus",
      edition: "Alpha",
      price: 25000.00,
      image: "https://cdn1.mtggoldfish.com/images/h/Black-Lotus-VMA-672.jpg",
      stock: 1,
    },
    {
      id: 8,
      name: "Jace, o Escultor de Mentes",
      edition: "Worldwake",
      price: 999.99,
      image: "https://product-images.tcgplayer.com/fit-in/437x437/42005.jpg",
      stock: 2,
    },
    {
      id: 9,
      name: "Liliana do Véu",
      edition: "Innistrad",
      price: 799.99,
      image: "https://product-images.tcgplayer.com/fit-in/437x437/48521.jpg",
      stock: 3,
    }
  ],
  bakugan: [
    {
      id: 10,
      name: "Dragonoid Maximus",
      edition: "Edição Especial",
      price: 149.99,
      image: "https://m.media-amazon.com/images/I/81OMFV4gkdL._AC_UF1000,1000_QL80_.jpg",
      stock: 4,
    },
    {
      id: 11,
      name: "Hydorous Ultra",
      edition: "Battle Planet",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/71L6wq6qIyL.jpg",
      stock: 6,
    },
    {
      id: 12,
      name: "Deck Iniciante Bakugan",
      edition: "Armored Alliance",
      price: 119.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_882257-MLB50983646511_082022-O.webp",
      stock: 10,
    }
  ],
  accessories: [
    {
      id: 13,
      name: "Pasta para Cards",
      edition: "Ultra Pro",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/71KNgJandIL._AC_UF894,1000_QL80_.jpg",
      stock: 15,
    },
    {
      id: 14,
      name: "Sleeves Premium",
      edition: "Dragon Shield",
      price: 29.99,
      image: "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280x1280/products/45656/107241/AT-13001__63742.1669800618.png",
      stock: 50,
    },
    {
      id: 15,
      name: "Playmat Profissional",
      edition: "Ultra Pro",
      price: 129.99,
      image: "https://m.media-amazon.com/images/I/71kA6FWLItL._AC_UF894,1000_QL80_.jpg",
      stock: 8,
    }
  ],
  promotions: [
    {
      id: 16,
      name: "Booster Box Pokémon",
      edition: "Escuridão Incandescente",
      price: 599.99,
      originalPrice: 799.99,
      image: "https://m.media-amazon.com/images/I/81-q6RZmCvL._AC_UF1000,1000_QL80_.jpg",
      stock: 5,
      discount: "25% OFF",
    },
    {
      id: 17,
      name: "Estrutural Yu-Gi-Oh!",
      edition: "Cyber Strike",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://m.media-amazon.com/images/I/81GPXQc1ArL._AC_UF894,1000_QL80_.jpg",
      stock: 7,
      discount: "25% OFF",
    },
    {
      id: 18,
      name: "Bundle Magic",
      edition: "Eldraine",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://product-images.tcgplayer.com/fit-in/437x437/262645.jpg",
      stock: 3,
      discount: "25% OFF",
    }
  ]
};

interface ProductCategoryDisplayProps {
  category?: string;
}

const ProductCategoryDisplay: React.FC<ProductCategoryDisplayProps> = ({ category }) => {
  const navigate = useNavigate();
  const { addToCart, getCartQuantity } = useCart();
  
  const handleAddToCart = (productId: number) => {
    addToCart(productId);
    
    toast({
      title: "Produto adicionado ao carrinho!",
      description: "Confira seu carrinho para finalizar a compra.",
    });
  };

  // Default to showing all products if no category is specified
  const productsToShow = category && productsByCategory[category as keyof typeof productsByCategory] 
    ? productsByCategory[category as keyof typeof productsByCategory]
    : Object.values(productsByCategory).flat();

  if (productsToShow.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Nenhum produto encontrado</h2>
        <p className="text-gray-600">
          Não encontramos produtos nesta categoria. Por favor, tente outra categoria ou volte mais tarde.
        </p>
        <Button onClick={() => navigate('/shop')} className="mt-6">
          Voltar para a loja
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {category === 'promotions' ? 'Ofertas Especiais' : 'Produtos Disponíveis'}
        </h2>
        <Button variant="outline" onClick={() => navigate('/cart')}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          <span>Carrinho ({getCartQuantity()})</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsToShow.map((product: any) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                {product.discount && (
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    {product.discount}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-sm text-gray-500 mb-2">{product.edition}</p>
              <div className="flex justify-between items-center">
                <div>
                  {product.originalPrice ? (
                    <>
                      <p className="font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</p>
                    </>
                  ) : (
                    <p className="font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                  )}
                </div>
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

export default ProductCategoryDisplay;
