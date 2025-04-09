
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const Registration = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Redirecionando para o cadastro",
      description: "Você será redirecionado para nossa página completa de cadastro.",
    });
  };
  
  return (
    <div className="py-16 bg-gray-100" id="register">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cadastre-se para ofertas exclusivas</h2>
            <p className="text-gray-600 mb-6">
              Junte-se à comunidade Card Kingdom e tenha acesso a:
            </p>
            
            <ul className="space-y-4">
              {[
                "Descontos exclusivos para membros",
                "Notificações sobre novos lançamentos",
                "Acesso antecipado às promoções",
                "Conteúdo exclusivo sobre estratégias e dicas",
                "Programa de fidelidade com pontos para trocar por cartas"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Criar uma conta</CardTitle>
              <CardDescription>
                Preencha os campos abaixo para se cadastrar na nossa loja
              </CardDescription>
            </CardHeader>
            <Button 
              component={Link} 
              to="/register" 
              className="w-[calc(100%-48px)] mx-6 mb-6 bg-magic hover:bg-magic/90"
              asChild
            >
              <Link to="/register">Ir para o cadastro completo</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
