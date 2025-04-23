
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface GameCategory {
  id: string;
  name: string;
  color: string;
  cards: CardItem[];
}

interface CardItem {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rarity: string;
  inStock: boolean;
}

const categories: GameCategory[] = [
  {
    id: "pokemon",
    name: "Pokémon",
    color: "bg-pokemon text-white",
    cards: [
      {
        id: "poke1",
        name: "Charizard GX",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/200188.jpg",
        price: 189.90,
        oldPrice: 229.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "poke2",
        name: "Pikachu VMax Rainbow",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/233728.jpg",
        price: 59.90,
        rarity: "Secreta Rara",
        inStock: true,
      },
      {
        id: "poke3",
        name: "Mewtwo GX Shiny",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/195074.jpg",
        price: 149.90,
        rarity: "Ultra Rara",
        inStock: false,
      },
      {
        id: "poke4",
        name: "Eevee VMax",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/237939.jpg",
        price: 39.90,
        rarity: "Rara",
        inStock: true,
      },
    ],
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    color: "bg-yugioh text-white",
    cards: [
      {
        id: "yugi1",
        name: "Dragão Branco de Olhos Azuis",
        image: "/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png",
        price: 79.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "yugi2",
        name: "Mago Negro",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/183874.jpg",
        price: 69.90,
        oldPrice: 89.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "yugi3",
        name: "Exodia, O Proibido",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/183851.jpg",
        price: 249.90,
        rarity: "Secreta Rara",
        inStock: false,
      },
      {
        id: "yugi4",
        name: "Magician's Souls",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/205464.jpg",
        price: 29.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
    ],
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    color: "bg-magic text-white",
    cards: [
      {
        id: "magic1",
        name: "Jace, o Escultor Mental",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/42005.jpg",
        price: 129.90,
        rarity: "Mítica Rara",
        inStock: true,
      },
      {
        id: "magic2",
        name: "Liliana do Véu",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/63113.jpg",
        price: 189.90,
        oldPrice: 219.90,
        rarity: "Mítica Rara",
        inStock: true,
      },
      {
        id: "magic3",
        name: "Força Ancestral",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/253479.jpg",
        price: 69.90,
        rarity: "Rara",
        inStock: false,
      },
      {
        id: "magic4",
        name: "Black Lotus",
        image: "https://product-images.tcgplayer.com/fit-in/437x437/8094.jpg",
        price: 19999.90,
        rarity: "Power Nine",
        inStock: true,
      },
    ],
  },
  {
    id: "bakugan",
    name: "Bakugan",
    color: "bg-bakugan text-white",
    cards: [
      {
        id: "baku1",
        name: "Dragonoid Ultra",
        image: "https://http2.mlstatic.com/D_NQ_NP_833807-MLB45005135457_022021-O.jpg",
        price: 39.90,
        rarity: "Ultra",
        inStock: true,
      },
      {
        id: "baku2",
        name: "Hydorous Ultra",
        image: "https://m.media-amazon.com/images/I/71L6wq6qIyL.jpg",
        price: 29.90,
        rarity: "Rara",
        inStock: true,
      },
      {
        id: "baku3",
        name: "Maximus Dragonoid",
        image: "https://m.media-amazon.com/images/I/81OMFV4gkdL._AC_UF1000,1000_QL80_.jpg",
        price: 49.90,
        oldPrice: 59.90,
        rarity: "Ultra",
        inStock: false,
      },
      {
        id: "baku4",
        name: "Pegatrix Ultra",
        image: "https://m.media-amazon.com/images/I/71mO0qmpp6L._AC_UF894,1000_QL80_.jpg",
        price: 24.90,
        rarity: "Comum",
        inStock: true,
      },
    ],
  },
];

const CardShowcase = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore nossas coleções</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre cartas raras, deck completos e boosters das principais franquias de card games do mundo.
          </p>
        </div>
        
        <Tabs defaultValue="pokemon" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className={`${category.id === "pokemon" ? "bg-pokemon text-white data-[state=active]:bg-pokemon" : 
                             category.id === "yugioh" ? "bg-yugioh text-white data-[state=active]:bg-yugioh" : 
                             category.id === "magic" ? "bg-magic text-white data-[state=active]:bg-magic" : 
                             "bg-bakugan text-white data-[state=active]:bg-bakugan"} 
                             data-[state=active]:text-white font-medium`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.cards.map((card) => (
                  <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-64 object-contain bg-gray-100 p-4"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 ${
                          category.id === "pokemon" ? "bg-pokemon" : 
                          category.id === "yugioh" ? "bg-yugioh" : 
                          category.id === "magic" ? "bg-magic" : 
                          "bg-bakugan"
                        }`}
                      >
                        {card.rarity}
                      </Badge>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 left-2 bg-white/80 hover:bg-white text-gray-700"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-2">{card.name}</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          {card.oldPrice && (
                            <span className="text-gray-500 line-through text-sm mr-2">
                              R$ {card.oldPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="text-lg font-bold">
                            R$ {card.price.toFixed(2)}
                          </span>
                        </div>
                        <Button 
                          disabled={!card.inStock}
                          className={`${
                            category.id === "pokemon" ? "bg-pokemon hover:bg-pokemon/90" : 
                            category.id === "yugioh" ? "bg-yugioh hover:bg-yugioh/90" : 
                            category.id === "magic" ? "bg-magic hover:bg-magic/90" : 
                            "bg-bakugan hover:bg-bakugan/90"
                          }`}
                          size="sm"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {card.inStock ? "Comprar" : "Esgotado"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-2">Ver mais {category.name}</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CardShowcase;
