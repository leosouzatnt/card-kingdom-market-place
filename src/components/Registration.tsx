
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// This is a simplified version of the Registration component
// The actual implementation will include form fields and submission logic

const Registration = () => {
  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Criar uma Conta</h1>
        <p className="text-gray-600">Cadastre-se para comprar suas cartas favoritas</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Digite seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Digite seu email"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Digite uma senha segura"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <Button type="submit" className="w-full">
          Criar Conta
        </Button>
      </div>
      
      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Já possui uma conta?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Entrar
          </Link>
        </p>
      </div>
      
      <div className="mt-6">
        <Link to="/register">
          <Button variant="outline" className="w-full">
            Ir para o cadastro completo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
