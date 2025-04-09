
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Cadastre-se</h1>
          <p className="text-gray-600 mb-8">
            Crie uma conta para acessar benefícios exclusivos e gerenciar seus pedidos
          </p>
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
