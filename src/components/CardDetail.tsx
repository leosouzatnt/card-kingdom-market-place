
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface CardDetailProps {
  card: {
    id: string;
    name: string;
    edition: string;
    imageUrl: string;
    rarity: string;
    price: number;
    description: string;
    category: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const CardDetail: React.FC<CardDetailProps> = ({ card, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{card.name}</DialogTitle>
          <DialogDescription>
            Edição: {card.edition} | Raridade: {card.rarity}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <img
              src={card.imageUrl}
              alt={card.name}
              className="max-w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{ maxHeight: '400px' }}
            />
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Detalhes</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Categoria</h3>
                  <p className="text-gray-600 capitalize">{card.category}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Preço</h3>
                  <p className="text-xl font-bold text-green-600">
                    R$ {card.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardDetail;
