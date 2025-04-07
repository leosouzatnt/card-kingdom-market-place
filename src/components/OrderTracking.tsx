
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { PackageSearch, Truck, CheckCircle2, Package } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<{
    orderNumber: string;
    status: 'processing' | 'shipped' | 'delivered';
    statusText: string;
    updateDate: string;
    estimatedDelivery: string;
  } | null>(null);
  
  const { toast } = useToast();

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, insira um número de pedido válido.",
      });
      return;
    }

    setIsSearching(true);
    
    // Simulando busca de pedido com um timeout
    setTimeout(() => {
      // Simulando dados de pedido
      if (trackingNumber === '123456789' || trackingNumber.length > 5) {
        const statuses = ['processing', 'shipped', 'delivered'] as const;
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        setTrackingResult({
          orderNumber: trackingNumber,
          status: randomStatus,
          statusText: 
            randomStatus === 'processing' ? 'Em processamento' : 
            randomStatus === 'shipped' ? 'Em trânsito' : 
            'Entregue',
          updateDate: new Date().toLocaleDateString('pt-BR'),
          estimatedDelivery: 
            randomStatus === 'processing' ? 
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR') : 
            randomStatus === 'shipped' ? 
              new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR') :
              new Date().toLocaleDateString('pt-BR')
        });
      } else {
        toast({
          variant: "destructive",
          title: "Pedido não encontrado",
          description: "Não foi possível encontrar um pedido com esse número. Verifique e tente novamente.",
        });
        setTrackingResult(null);
      }
      
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="py-16 bg-white" id="tracking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rastreie seu pedido</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insira o número do seu pedido para acompanhar o status de entrega das suas cartas.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleTracking} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input 
                    placeholder="Digite o número do seu pedido" 
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-magic hover:bg-magic/90"
                    disabled={isSearching}
                  >
                    <PackageSearch className="mr-2 h-4 w-4" />
                    {isSearching ? 'Buscando...' : 'Rastrear'}
                  </Button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Dica: Para fins de demonstração, use o número "123456789" ou qualquer número com mais de 5 dígitos.</p>
                </div>
              </form>
              
              {trackingResult && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Pedido #{trackingResult.orderNumber}</h3>
                    <div 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        trackingResult.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 
                        trackingResult.status === 'shipped' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {trackingResult.statusText}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-8 top-0 h-full w-[2px] bg-gray-200 z-0"></div>
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex items-start">
                        <div className={`
                          flex items-center justify-center rounded-full w-16 h-16
                          ${trackingResult.status !== 'processing' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}
                        `}>
                          <Package className="h-7 w-7" />
                        </div>
                        <div className="ml-6">
                          <p className="font-medium">Pedido recebido</p>
                          <p className="text-sm text-gray-500">Seu pedido foi confirmado e está sendo preparado.</p>
                          <p className="text-sm text-gray-500">Data: {trackingResult.updateDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className={`
                          flex items-center justify-center rounded-full w-16 h-16
                          ${trackingResult.status === 'processing' ? 'bg-gray-100 text-gray-400' : 
                            trackingResult.status !== 'delivered' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}
                        `}>
                          <Truck className="h-7 w-7" />
                        </div>
                        <div className="ml-6">
                          <p className="font-medium">Em trânsito</p>
                          {trackingResult.status === 'processing' ? (
                            <p className="text-sm text-gray-500">Seu pedido ainda não foi enviado.</p>
                          ) : (
                            <>
                              <p className="text-sm text-gray-500">Seu pedido está a caminho.</p>
                              <p className="text-sm text-gray-500">Previsão de entrega: {trackingResult.estimatedDelivery}</p>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className={`
                          flex items-center justify-center rounded-full w-16 h-16
                          ${trackingResult.status === 'delivered' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}
                        `}>
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <div className="ml-6">
                          <p className="font-medium">Entregue</p>
                          {trackingResult.status === 'delivered' ? (
                            <p className="text-sm text-gray-500">Seu pedido foi entregue em {trackingResult.updateDate}.</p>
                          ) : (
                            <p className="text-sm text-gray-500">Seu pedido ainda não foi entregue.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
