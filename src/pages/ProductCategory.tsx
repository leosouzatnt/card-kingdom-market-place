
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCategoryDisplay from '@/components/ProductCategoryDisplay';

const ProductCategory = () => {
  const { category } = useParams();
  
  const getCategoryTitle = () => {
    switch(category) {
      case 'pokemon':
        return 'Cartas Pokémon';
      case 'yugioh':
        return 'Cartas Yu-Gi-Oh!';
      case 'magic':
        return 'Cartas Magic';
      case 'bakugan':
        return 'Cartas Bakugan';
      case 'accessories':
        return 'Acessórios';
      case 'promotions':
        return 'Promoções';
      default:
        return 'Produtos';
    }
  };

  const getBannerDescription = () => {
    switch(category) {
      case 'pokemon':
        return 'Explore nossa coleção completa de cards Pokémon de todas as gerações.';
      case 'yugioh':
        return 'Cartas para duelistas de todos os níveis, desde iniciantes até profissionais.';
      case 'magic':
        return 'As melhores cartas de Magic: The Gathering para expandir seu deck.';
      case 'bakugan':
        return 'Encontre as cartas Bakugan mais raras e populares do momento.';
      case 'accessories':
        return 'Todos os acessórios que você precisa para proteger e organizar sua coleção.';
      case 'promotions':
        return 'Aproveite nossas ofertas especiais e promoções por tempo limitado.';
      default:
        return 'Encontre os melhores produtos para sua coleção.';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{getCategoryTitle()}</h1>
          <p className="text-gray-600 mb-8">
            {getBannerDescription()}
          </p>
        </div>
      </div>
      <main className="flex-1">
        <ProductCategoryDisplay category={category} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;
