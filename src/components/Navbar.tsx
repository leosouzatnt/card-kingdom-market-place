
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User,
  Search,
  HeartPulse
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <HeartPulse className="h-8 w-8 text-magic" />
              <span className="ml-2 font-bold text-xl">Card Kingdom</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
              Home
            </Link>
            <Link to="/products" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/products') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
              Produtos
            </Link>
            <Link to="/testimonials" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/testimonials') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
              Depoimentos
            </Link>
            <Link to="/tracking" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/tracking') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
              Rastreamento
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>Entrar</span>
            </Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Home
            </Link>
            <Link to="/products" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/products') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Produtos
            </Link>
            <Link to="/testimonials" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/testimonials') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Depoimentos
            </Link>
            <Link to="/tracking" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/tracking') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Rastreamento
            </Link>
            <div className="flex items-center justify-between px-4 py-2">
              <Button variant="outline" className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Entrar</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
