
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  edition: z.string().min(2, { message: "Edição precisa ser especificada" }),
  imageUrl: z.string().url({ message: "URL da imagem inválida" }),
  rarity: z.string().min(2, { message: "Raridade precisa ser especificada" }),
  price: z.string().min(1, { message: "Preço precisa ser especificado" }),
  description: z.string().min(10, { message: "Descrição precisa ter pelo menos 10 caracteres" }),
  category: z.enum(["pokemon", "yugioh", "magic", "other"], {
    required_error: "Selecione uma categoria",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CardRegistrationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      edition: "",
      imageUrl: "",
      rarity: "",
      price: "",
      description: "",
      category: "pokemon",
    },
  });

  const onSubmit = (values: FormValues) => {
    const cards = JSON.parse(localStorage.getItem('registeredCards') || '[]');
    const newCard = {
      ...values,
      id: Date.now().toString(),
      price: parseFloat(values.price),
    };
    
    cards.push(newCard);
    localStorage.setItem('registeredCards', JSON.stringify(cards));
    
    toast({
      title: "Carta registrada com sucesso!",
      description: "A carta foi adicionada ao catálogo.",
    });
    
    form.reset();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Registrar Nova Carta</CardTitle>
        <CardDescription>
          Preencha os detalhes da carta que deseja registrar
        </CardDescription>
      </CardHeader>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Carta</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome da carta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="edition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Edição</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Base Set, LOB..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rarity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Raridade</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Comum, Rara..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="pokemon">Pokémon</option>
                      <option value="yugioh">Yu-Gi-Oh!</option>
                      <option value="magic">Magic</option>
                      <option value="other">Outra</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva os detalhes da carta..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Registrar Carta
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default CardRegistrationForm;
