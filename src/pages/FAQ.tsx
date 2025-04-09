
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamentos via cartão de crédito (todas as bandeiras), PIX, boleto bancário e transferência bancária. Para cartões, parcelamos em até 12x sem juros, dependendo do valor da compra."
    },
    {
      question: "Como faço para rastrear meu pedido?",
      answer: "Após a confirmação do pagamento e envio do pedido, você receberá um e-mail com o código de rastreamento. Você também pode acessar a página de Rastreamento em nosso site, inserir o código fornecido e acompanhar o status da entrega em tempo real."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia conforme a região e o método de envio escolhido. Normalmente, enviamos os produtos em até 2 dias úteis após a confirmação do pagamento. O prazo médio de entrega é de 3 a 10 dias úteis, dependendo da sua localização."
    },
    {
      question: "As cartas vendidas são originais?",
      answer: "Sim, todas as cartas vendidas em nossa loja são 100% originais e autênticas. Trabalhamos diretamente com distribuidores oficiais e garantimos a procedência de todos os nossos produtos."
    },
    {
      question: "Vocês vendem cartas individuais ou apenas pacotes?",
      answer: "Vendemos tanto cartas individuais quanto pacotes e boxes. Nossa coleção inclui cartas raras e comuns de diversas edições, além dos lançamentos mais recentes."
    },
    {
      question: "Como saber o estado de conservação das cartas?",
      answer: "Todas as nossas cartas usadas são classificadas segundo padrões internacionais de conservação (Mint, Near Mint, Excellent, Good, etc). A descrição detalhada do estado de cada carta está disponível em sua página individual no site."
    },
    {
      question: "Posso trocar ou vender minhas cartas para a loja?",
      answer: "Sim, aceitamos cartas para troca ou compra. Entre em contato conosco através do e-mail ou visite nossa loja física para avaliação das suas cartas."
    },
    {
      question: "Vocês realizam eventos ou torneios?",
      answer: "Sim, organizamos regularmente torneios e eventos em nossa loja física. Acompanhe nosso calendário de eventos no site ou em nossas redes sociais."
    },
    {
      question: "Qual a política de trocas e devoluções?",
      answer: "Aceitamos trocas e devoluções em até 7 dias após o recebimento do produto, desde que o mesmo esteja em perfeito estado e na embalagem original. Em caso de produtos com defeito, o prazo é de 30 dias."
    },
    {
      question: "Vocês atendem fora do Brasil?",
      answer: "Atualmente, realizamos envios apenas para território brasileiro. Estamos trabalhando para expandir nossos serviços para outros países da América Latina em breve."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Perguntas Frequentes</h1>
          <p className="text-gray-600 mb-8">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Não encontrou o que procurava?</h2>
            <p className="mb-4">
              Se você tem uma dúvida que não foi respondida acima, entre em contato conosco:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <h3 className="font-medium mb-2">Por e-mail:</h3>
                <p>contato@cardkingdom.com</p>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Por telefone:</h3>
                <p>(11) 9999-9999</p>
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">Horário de atendimento:</h3>
                <p>Segunda a sexta, das 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
