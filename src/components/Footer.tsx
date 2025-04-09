
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Instagram, Twitter, Facebook, Youtube, CreditCard, Package, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <HeartPulse className="h-8 w-8 text-magic" />
              <span className="ml-2 font-bold text-xl">Card Kingdom</span>
            </div>
            <p className="text-gray-400 mb-6">
              O melhor lugar para encontrar cartas colecionáveis e expandir seu deck para jogos de cartas como Pokémon, Yu-Gi-Oh, Magic e Bakugan.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">Todos os Produtos</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white">Loja</Link>
              </li>
              <li>
                <Link to="/tracking" className="text-gray-400 hover:text-white">Rastrear Pedido</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white">Depoimentos</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">Perguntas Frequentes</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/pokemon" className="text-gray-400 hover:text-white">Cartas Pokémon</Link>
              </li>
              <li>
                <Link to="/products/yugioh" className="text-gray-400 hover:text-white">Cartas Yu-Gi-Oh!</Link>
              </li>
              <li>
                <Link to="/products/magic" className="text-gray-400 hover:text-white">Cartas Magic</Link>
              </li>
              <li>
                <Link to="/products/bakugan" className="text-gray-400 hover:text-white">Cartas Bakugan</Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-gray-400 hover:text-white">Acessórios</Link>
              </li>
              <li>
                <Link to="/products/promotions" className="text-gray-400 hover:text-white">Promoções</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contato & Informações</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-6 w-6 mr-3 text-gray-400" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex">
                <Mail className="h-6 w-6 mr-3 text-gray-400" />
                <a href="mailto:contato@cardkingdom.com" className="hover:text-white">contato@cardkingdom.com</a>
              </li>
              <li className="flex">
                <CreditCard className="h-6 w-6 mr-3 text-gray-400" />
                <span>Aceitamos todas as bandeiras</span>
              </li>
              <li className="flex">
                <Package className="h-6 w-6 mr-3 text-gray-400" />
                <span>Entrega para todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Card Kingdom. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </Link>
              <Link to="/returns" className="text-gray-400 hover:text-white text-sm">
                Política de Trocas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
