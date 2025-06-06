import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-magic to-yugioh overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cards-pattern.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                O melhor lugar para cards colecionáveis
              </h1>
              <p className="text-lg max-w-xl">
                Encontre as melhores cartas de Pokémon, Yu-Gi-Oh, Magic e Bakugan
                para sua coleção ou para dominar suas batalhas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-white text-magic hover:bg-gray-100 hover:text-magic"
                  asChild
                >
                  <Link to="/products">Ver produtos</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-magic"
                  asChild
                >
                  <Link to="/register">
                    Cadastre-se
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute top-4 left-20 w-64 h-80 bg-yugioh rounded-lg transform rotate-12 shadow-xl animate-float animation-delay-200 z-20">
                <img 
                  src="/lovable-uploads/68cda54f-cb45-4299-8a9a-7368b8fabb07.png" 
                  alt="Dragão Branco de Olhos Azuis - 1ª Edição" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white text-center py-1 rounded">
                  Dragão Branco de Olhos Azuis - 1ª Edição
                </div>
              </div>
              <div className="absolute top-12 -left-4 w-48 h-64 bg-pokemon rounded-lg transform -rotate-6 shadow-xl animate-float z-10">
                <img 
                  src="https://assets.pokemon.com/assets/cms2/img/cards/web/SM12/SM12_EN_5.png" 
                  alt="Carta Pokémon" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-16 left-40 w-48 h-64 bg-magic rounded-lg transform -rotate-12 shadow-xl animate-float animation-delay-400 z-30">
                <img 
                  src="https://static.cardmarket.com/img/a0298e0c3aaf3b49543e8c05741bc43c/items/1/WWK/189956.jpg" 
                  alt="Carta Magic" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
