
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Rafael Silva",
    avatar: "https://i.pravatar.cc/150?u=1",
    role: "Colecionador de Pokémon",
    comment: "Melhor loja para encontrar cartas raras! Já comprei diversas vezes e sempre recebi produtos originais e em perfeito estado.",
    rating: 5
  },
  {
    id: "test2",
    name: "Juliana Costa",
    avatar: "https://i.pravatar.cc/150?u=2",
    role: "Jogadora de Magic",
    comment: "Preços competitivos e entrega rápida. Encontrei cartas que procurava há anos para completar meu deck competitivo.",
    rating: 5
  },
  {
    id: "test3",
    name: "Lucas Mendes",
    avatar: "https://i.pravatar.cc/150?u=3",
    role: "Fã de Yu-Gi-Oh!",
    comment: "Atendimento excelente! Tive um problema com uma carta e a equipe resolveu rapidamente. Super recomendo!",
    rating: 4
  },
  {
    id: "test4",
    name: "Mariana Alves",
    avatar: "https://i.pravatar.cc/150?u=4",
    role: "Colecionadora de Bakugan",
    comment: "As cartas sempre chegam bem embaladas e protegidas. Já sou cliente há mais de um ano e nunca tive problemas.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira as avaliações de colecionadores e jogadores que já compraram em nossa loja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3 mt-2">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
