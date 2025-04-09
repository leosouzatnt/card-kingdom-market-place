
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Depoimentos</h1>
          <p className="text-gray-600 mb-8">
            Veja o que nossos clientes estão falando sobre nós e nossos produtos.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
