
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardShowcase from '@/components/CardShowcase';
import FeaturedCards from '@/components/FeaturedCards';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Produtos</h1>
          <p className="text-gray-600 mb-8">
            Explore nossa coleção de cartas colecionáveis das melhores franquias.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <FeaturedCards />
        <CardShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
