
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
        image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM12/SM12_EN_9.png",
        price: 189.90,
        oldPrice: 229.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "poke2",
        name: "Pikachu V",
        image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH4/SWSH4_EN_43.png",
        price: 59.90,
        rarity: "Rara",
        inStock: true,
      },
      {
        id: "poke3",
        name: "Mewtwo GX",
        image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SM12/SM12_EN_31.png",
        price: 149.90,
        rarity: "Ultra Rara",
        inStock: false,
      },
      {
        id: "poke4",
        name: "Eevee V",
        image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH45/SWSH45_EN_1.png",
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
        image: "https://ms.yugipedia.com//f/fd/BlueEyesWhiteDragon-LDS2-EN-UR-1E.png",
        price: 79.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "yugi2",
        name: "Mago Negro",
        image: "https://ms.yugipedia.com//3/30/DarkMagician-DUPO-EN-UR-LE.png",
        price: 69.90,
        oldPrice: 89.90,
        rarity: "Ultra Rara",
        inStock: true,
      },
      {
        id: "yugi3",
        name: "Exodia, O Proibido",
        image: "https://ms.yugipedia.com//6/65/ExodiatheForbiddenOne-TLM-NA-UR-UE.png",
        price: 249.90,
        rarity: "Lendária",
        inStock: false,
      },
      {
        id: "yugi4",
        name: "Magician's Valkyria",
        image: "https://ms.yugipedia.com//2/2e/MagiciansValkyria-DUPO-EN-UR-LE.png",
        price: 29.90,
        rarity: "Rara",
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
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=380190&type=card",
        price: 129.90,
        rarity: "Mítica",
        inStock: true,
      },
      {
        id: "magic2",
        name: "Liliana dos Véus Sombrios",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=230787&type=card",
        price: 189.90,
        oldPrice: 219.90,
        rarity: "Mítica",
        inStock: true,
      },
      {
        id: "magic3",
        name: "Chandra, Tocha da Desafiante",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=393830&type=card",
        price: 69.90,
        rarity: "Rara",
        inStock: false,
      },
      {
        id: "magic4",
        name: "Serra Angel",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=270376&type=card",
        price: 19.90,
        rarity: "Incomum",
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
        image: "https://bakugan.wiki/images/5/57/Dragonoid_Ultra_%28Card%29_ENG_559.png",
        price: 39.90,
        rarity: "Ultra",
        inStock: true,
      },
      {
        id: "baku2",
        name: "Haos Lupitheon",
        image: "https://bakugan.wiki/images/e/e5/BG078.png",
        price: 29.90,
        rarity: "Rara",
        inStock: true,
      },
      {
        id: "baku3",
        name: "Darkus Hydranoid",
        image: "https://bakugan.wiki/images/c/c4/083_Darkus_Hydranoid.jpg",
        price: 49.90,
        oldPrice: 59.90,
        rarity: "Ultra",
        inStock: false,
      },
      {
        id: "baku4",
        name: "Aquos Goreene",
        image: "https://bakugan.wiki/images/f/f9/BG076.png",
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
