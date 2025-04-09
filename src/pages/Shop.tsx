
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShopContent from '@/components/ShopContent';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Loja</h1>
          <p className="text-gray-600 mb-8">
            Explore nossa vasta coleção de cartas e acessórios.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <ShopContent />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
