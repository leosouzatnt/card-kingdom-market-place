
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Entrar</h1>
          <p className="text-gray-600 mb-8">
            Acesse sua conta para gerenciar pedidos e comprar cartas
          </p>
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
