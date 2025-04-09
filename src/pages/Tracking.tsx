
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderTracking from '@/components/OrderTracking';

const Tracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Rastreamento</h1>
          <p className="text-gray-600 mb-8">
            Acompanhe o status do seu pedido inserindo o número de rastreamento abaixo.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <OrderTracking />
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
