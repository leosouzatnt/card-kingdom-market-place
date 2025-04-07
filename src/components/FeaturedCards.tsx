
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedCard {
  id: string;
  name: string;
  image: string;
  price: number;
  game: string;
  highlight: string;
}

const featuredCards: FeaturedCard[] = [
  {
    id: "feature1",
    name: "Charizard VMAX Rainbow",
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH4/SWSH4_EN_74.png",
    price: 799.90,
    game: "Pokémon",
    highlight: "Carta Ultra Rara"
  },
  {
    id: "feature2",
    name: "Jace, the Mind Sculptor",
    image: "https://static.cardmarket.com/img/a0298e0c3aaf3b49543e8c05741bc43c/items/1/WWK/189956.jpg",
    price: 349.90,
    game: "Magic",
    highlight: "Mítica Rara"
  },
  {
    id: "feature3",
    name: "Dragão Branco de Olhos Azuis - 1ª Edição",
    image: "https://ms.yugipedia.com//9/9e/BlueEyesWhiteDragon-LOB-NA-UR-1E.png",
    price: 1299.90,
    game: "Yu-Gi-Oh!",
    highlight: "Edição Limitada"
  },
  {
    id: "feature4",
    name: "Dragonoid Maximus",
    image: "https://bakugan.wiki/images/5/5f/Bakugan_Resurgence_Drago_%28Card%29_ENG.png",
    price: 199.90,
    game: "Bakugan",
    highlight: "Ultra Rara"
  },
  {
    id: "feature5",
    name: "Ancient Mew",
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/MCD19/MCD19_EN_1.png",
    price: 249.90,
    game: "Pokémon",
    highlight: "Promocional"
  }
];

const FeaturedCards = () => {
  return (
    <div className="py-16 bg-card-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Destaques da Semana</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cartas raras e especiais selecionadas pelo nosso time de especialistas.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredCards.map((card) => (
              <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-80 object-contain bg-white p-4"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        card.game === "Pokémon" ? "bg-pokemon" : 
                        card.game === "Yu-Gi-Oh!" ? "bg-yugioh" : 
                        card.game === "Magic" ? "bg-magic" : 
                        "bg-bakugan"
                      } font-medium`}
                    >
                      {card.game}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{card.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{card.highlight}</p>
                    <p className="text-lg font-bold text-gray-900">R$ {card.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedCards;
