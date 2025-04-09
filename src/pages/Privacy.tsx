
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
          <p className="text-gray-600 mb-8">
            Como utilizamos e protegemos suas informações pessoais.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Introdução</h2>
            <p className="mb-4">
              A Card Kingdom está comprometida em proteger sua privacidade e assegurar que suas informações 
              pessoais estejam seguras. Esta Política de Privacidade explica como coletamos, usamos, 
              compartilhamos e protegemos seus dados quando você utiliza nosso site ou nossos serviços.
            </p>
            <p>
              Ao utilizar nosso site ou serviços, você concorda com a coleta e uso de informações de 
              acordo com esta política. Recomendamos que você leia atentamente este documento para entender 
              nossas práticas em relação aos seus dados pessoais.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Informações que Coletamos</h2>
            <p className="mb-4">Podemos coletar os seguintes tipos de informações:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Informações Pessoais</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Endereço para entrega e faturamento</li>
              <li>Número de telefone</li>
              <li>CPF ou CNPJ</li>
              <li>Informações de pagamento (processadas de forma segura)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Informações de Uso</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Histórico de compras</li>
              <li>Produtos visualizados</li>
              <li>Interações com o site</li>
              <li>Endereço IP</li>
              <li>Tipo de navegador</li>
              <li>Sistema operacional</li>
              <li>Tempo gasto no site</li>
              <li>Páginas visitadas</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Como Utilizamos suas Informações</h2>
            <p className="mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Processar e entregar seus pedidos</li>
              <li>Gerenciar sua conta e fornecer suporte ao cliente</li>
              <li>Enviar atualizações sobre pedidos e entregas</li>
              <li>Personalizar sua experiência de compra</li>
              <li>Informar sobre produtos ou serviços que possam ser do seu interesse</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Detectar e prevenir fraudes</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Compartilhamento de Dados</h2>
            <p className="mb-4">
              Não vendemos, alugamos ou negociamos suas informações pessoais com terceiros. Podemos 
              compartilhar suas informações nas seguintes circunstâncias:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Com parceiros de logística para entrega de produtos</li>
              <li>Com processadores de pagamento para processar suas compras</li>
              <li>Com prestadores de serviços que nos ajudam a operar o site</li>
              <li>Quando exigido por lei ou para proteger nossos direitos legais</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações 
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos 
              criptografia SSL para proteger a transmissão de dados sensíveis, como informações de pagamento.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Seus Direitos</h2>
            <p className="mb-4">Você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Acessar seus dados pessoais que mantemos</li>
              <li>Corrigir dados imprecisos ou incompletos</li>
              <li>Solicitar a exclusão de seus dados pessoais</li>
              <li>Restringir ou opor-se ao processamento de seus dados</li>
              <li>Receber seus dados em formato estruturado (portabilidade)</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, 
              entre em contato conosco em:
            </p>
            <p className="font-medium">E-mail: privacidade@cardkingdom.com</p>
            <p>
              Última atualização desta política: 1 de abril de 2023
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
