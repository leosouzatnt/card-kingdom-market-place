
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Package, RefreshCw, Clock, AlertCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Política de Trocas e Devoluções</h1>
          <p className="text-gray-600 mb-8">
            Informações sobre como realizar trocas e devoluções de produtos.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Processo de Trocas e Devoluções</h2>
            <p className="mb-6">
              Na Card Kingdom, queremos garantir sua total satisfação com nossos produtos e serviços.
              Se por algum motivo você não estiver satisfeito com sua compra, oferecemos uma política
              clara e justa para trocas e devoluções.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <RefreshCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Troca de Produtos</h3>
                </div>
                <p>
                  Você pode solicitar a troca de um produto por outro de igual valor 
                  ou diferente (com ajuste de valores, se necessário), desde que o 
                  produto esteja em perfeitas condições, sem sinais de uso e com a 
                  embalagem original intacta.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ArrowLeft className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Devolução e Reembolso</h3>
                </div>
                <p>
                  Caso prefira cancelar a compra, você pode solicitar o reembolso 
                  integral do valor pago. O reembolso será processado na mesma forma 
                  de pagamento utilizada na compra original, seguindo os prazos da 
                  sua operadora financeira.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Prazos</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Prazos para Solicitação</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  <div>
                    <strong>7 dias</strong> para desistência da compra (direito de arrependimento, conforme Código de Defesa do Consumidor)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  <div>
                    <strong>7 dias</strong> para trocas de produtos em perfeitas condições
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  <div>
                    <strong>30 dias</strong> para produtos com defeito
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                O prazo é contado a partir da data do recebimento do produto.
              </p>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Como Solicitar uma Troca ou Devolução</h2>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li className="pl-2">
                <strong>Entre em contato conosco</strong> através do e-mail trocas@cardkingdom.com ou pelo 
                telefone (11) 9999-9999, informando o número do pedido e o motivo da solicitação.
              </li>
              <li className="pl-2">
                <strong>Aguarde nossa confirmação</strong> com as instruções para envio do produto.
              </li>
              <li className="pl-2">
                <strong>Envie o produto</strong> para o endereço indicado, em sua embalagem original, 
                juntamente com a nota fiscal e todos os acessórios.
              </li>
              <li className="pl-2">
                <strong>Após recebermos e avaliarmos o produto</strong>, processaremos a troca ou o 
                reembolso conforme solicitado.
              </li>
            </ol>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Condições para Troca ou Devolução</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold">Requisitos</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  O produto deve estar em perfeito estado, sem sinais de uso.
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  A embalagem original deve estar intacta.
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  Todos os acessórios, selos, etiquetas e manuais devem ser devolvidos.
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 text-amber-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  A nota fiscal de compra deve ser apresentada.
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Custos de Envio</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <Package className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Responsabilidade pelos custos</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  <div>
                    <strong>Em caso de defeito do produto:</strong> a Card Kingdom arcará com os custos de envio para devolução e reenvio.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  <div>
                    <strong>Em caso de arrependimento ou troca por outro motivo:</strong> o cliente será responsável pelos custos de envio para a devolução.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5">•</span>
                  <div>
                    <strong>Em caso de produto enviado incorretamente:</strong> a Card Kingdom arcará com todos os custos de envio.
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p>
              Para mais informações ou para iniciar um processo de troca ou devolução, entre em contato com 
              nossa equipe de atendimento ao cliente:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>E-mail:</strong> trocas@cardkingdom.com</p>
              <p><strong>Telefone:</strong> (11) 9999-9999</p>
              <p><strong>Horário de atendimento:</strong> Segunda a sexta, das 9h às 18h</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
