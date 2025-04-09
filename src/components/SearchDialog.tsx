
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Search as SearchIcon } from "lucide-react";

// Mock data to search through
const mockSearchData = [
  {
    id: 1,
    name: "Dragão Branco de Olhos Azuis",
    category: "Yu-Gi-Oh",
    url: "/products/yugioh/1",
  },
  {
    id: 2,
    name: "Charizard",
    category: "Pokémon",
    url: "/products/pokemon/2",
  },
  {
    id: 3,
    name: "Black Lotus",
    category: "Magic",
    url: "/products/magic/3",
  },
  {
    id: 4,
    name: "Exodia, o Proibido",
    category: "Yu-Gi-Oh",
    url: "/products/yugioh/4",
  },
  {
    id: 5,
    name: "Pikachu",
    category: "Pokémon",
    url: "/products/pokemon/5",
  },
  {
    id: 6,
    name: "Jace, o Escultor de Mentes",
    category: "Magic",
    url: "/products/magic/6",
  },
  {
    id: 7,
    name: "Sobre Nós",
    category: "Página",
    url: "/about",
  },
  {
    id: 8,
    name: "FAQ",
    category: "Página",
    url: "/faq",
  },
  {
    id: 9,
    name: "Rastreamento de Pedidos",
    category: "Página",
    url: "/tracking",
  },
];

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = searchQuery.length > 2
    ? mockSearchData.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleResultClick = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Busca</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Buscar cartas, produtos, páginas..."
            className="pl-8"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {searchQuery.length > 0 && (
          <div className="mt-2">
            {searchQuery.length < 3 ? (
              <p className="text-sm text-gray-500 text-center py-2">
                Digite pelo menos 3 caracteres para buscar
              </p>
            ) : filteredResults.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-2">
                Nenhum resultado encontrado
              </p>
            ) : (
              <ul className="max-h-96 overflow-auto divide-y">
                {filteredResults.map((result) => (
                  <li key={result.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start py-2"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="text-left">
                        <p className="font-medium">{result.name}</p>
                        <p className="text-sm text-gray-500">{result.category}</p>
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
