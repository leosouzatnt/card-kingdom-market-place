
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  lastName: z.string().min(2, { message: "Sobrenome precisa ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "Senha precisa ter pelo menos 8 caracteres" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos de serviço"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage (this is just for demonstration purposes)
      // In a real application, you would send this data to a backend
      localStorage.setItem('isRegistered', 'true');
      localStorage.setItem('user', JSON.stringify({ 
        email: values.email, 
        name: `${values.firstName} ${values.lastName}` 
      }));
      
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Enviamos um email de confirmação para você.",
      });
      
      navigate('/');
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao processar seu cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Criar uma conta</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para se cadastrar na nossa loja
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu sobrenome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange} 
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Concordo com os <a href="/terms" className="text-blue-600 hover:underline">Termos de Serviço</a> e <a href="/privacy" className="text-blue-600 hover:underline">Política de Privacidade</a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-magic hover:bg-magic/90"
              disabled={isLoading}
            >
              {isLoading ? "Processando..." : "Criar conta"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default RegistrationForm;
