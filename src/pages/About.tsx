
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Sobre Nós</h1>
          <p className="text-gray-600 mb-8">
            Conheça mais sobre a Card Kingdom e nossa missão.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <p className="mb-4">
              A Card Kingdom nasceu da paixão de um grupo de amigos por jogos de cartas colecionáveis. 
              O que começou como um pequeno hobby em 2010 rapidamente cresceu para se tornar uma das 
              maiores lojas especializadas em cards do Brasil.
            </p>
            <p>
              Com mais de 13 anos de experiência no mercado, nos tornamos referência na venda de cartas 
              de Pokémon, Yu-Gi-Oh!, Magic: The Gathering e outros jogos colecionáveis, sempre priorizando 
              a qualidade dos produtos e a satisfação dos nossos clientes.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p>
              Tornar acessível o universo dos jogos de cartas colecionáveis para todos os entusiastas, 
              desde iniciantes até competidores profissionais, oferecendo produtos de qualidade, 
              conhecimento especializado e criando uma comunidade apaixonada pelo hobby.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Paixão:</strong> Amamos o universo dos jogos de cartas e transmitimos isso em tudo que fazemos.</li>
              <li><strong>Autenticidade:</strong> Garantimos a autenticidade de todos os nossos produtos.</li>
              <li><strong>Comunidade:</strong> Acreditamos no poder dos jogos para unir pessoas e criar amizades.</li>
              <li><strong>Conhecimento:</strong> Compartilhamos nosso conhecimento para ajudar novos jogadores.</li>
              <li><strong>Excelência:</strong> Buscamos a excelência em cada aspecto do nosso trabalho.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Localização</h2>
            <p className="mb-4">
              Nossa loja física está localizada no centro de São Paulo, onde você encontrará 
              não apenas produtos para compra, mas também espaços para jogar e participar de eventos.
            </p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Mapa da localização</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
