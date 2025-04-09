
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User,
  Search,
  HeartPulse,
  LogOut
} from "lucide-react";
import SearchDialog from "./SearchDialog";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{name?: string, email?: string} | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartQuantity } = useCart();
  
  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    if (loginStatus) {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <>
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
              <Link to="/products" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/products') || location.pathname.startsWith('/products/') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                Produtos
              </Link>
              <Link to="/shop" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/shop') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                Loja
              </Link>
              <Link to="/testimonials" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/testimonials') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                Depoimentos
              </Link>
              <Link to="/tracking" className={`inline-flex items-center px-1 pt-1 border-b-2 ${isActive('/tracking') ? 'border-magic text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                Rastreamento
              </Link>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/cart')}
                aria-label="Carrinho"
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {getCartQuantity() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {getCartQuantity()}
                  </span>
                )}
              </Button>
              {isLoggedIn ? (
                <div className="relative group">
                  <Button variant="outline" className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span>{user?.name || "Usuário"}</span>
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {user?.email}
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm px-4 py-2 text-gray-700"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sair
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="flex items-center"
                  onClick={() => navigate('/login')}
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Entrar</span>
                </Button>
              )}
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
              <Link to="/products" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/products') || location.pathname.startsWith('/products/') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
                Produtos
              </Link>
              <Link to="/shop" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/shop') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
                Loja
              </Link>
              <Link to="/testimonials" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/testimonials') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
                Depoimentos
              </Link>
              <Link to="/tracking" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/tracking') ? 'border-magic bg-magic bg-opacity-10 text-magic' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
                Rastreamento
              </Link>
              <div className="flex items-center justify-between px-4 py-2">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="text-sm font-medium">
                      {user?.name || "Usuário"}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      <span>Sair</span>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    className="flex items-center"
                    onClick={() => navigate('/login')}
                  >
                    <User className="h-5 w-5 mr-2" />
                    <span>Entrar</span>
                  </Button>
                )}
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSearchOpen(true);
                    }}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/cart');
                    }}
                    className="relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {getCartQuantity() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {getCartQuantity()}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Navbar;
