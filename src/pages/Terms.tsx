
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>
          <p className="text-gray-600 mb-8">
            Regras e condições para utilização dos nossos serviços.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou usar o site Card Kingdom, você concorda em cumprir e estar vinculado a estes 
              Termos de Uso. Se você não concordar com algum aspecto destes termos, recomendamos que não 
              utilize nosso site ou serviços.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
            <p className="mb-4">
              O conteúdo do site Card Kingdom, incluindo texto, gráficos, imagens, logotipos, nomes de 
              produtos e software, é de propriedade da Card Kingdom ou de seus fornecedores e é protegido 
              por leis de direitos autorais.
            </p>
            <p>
              Você pode acessar e visualizar o conteúdo do site para seu uso pessoal, não comercial. Não é 
              permitido modificar, reproduzir, distribuir, transmitir, exibir ou usar o conteúdo do site 
              para qualquer finalidade comercial sem autorização prévia por escrito.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Contas de Usuário</h2>
            <p className="mb-4">
              Para realizar compras ou acessar determinadas funcionalidades, você precisa criar uma conta de 
              usuário. Ao criar uma conta, você concorda em:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Fornecer informações precisas, atuais e completas</li>
              <li>Manter a confidencialidade de sua senha</li>
              <li>Ser responsável por todas as atividades realizadas em sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Produtos e Compras</h2>
            <p className="mb-4">
              Todos os produtos são apresentados com a maior precisão possível. No entanto, não garantimos 
              que as imagens e descrições sejam completamente precisas.
            </p>
            <p className="mb-4">
              Os preços dos produtos estão sujeitos a alterações sem aviso prévio. Reservamo-nos o direito 
              de limitar a quantidade de produtos disponíveis para compra.
            </p>
            <p>
              A confirmação de um pedido depende da disponibilidade do produto e da confirmação do pagamento.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Política de Entrega</h2>
            <p className="mb-4">
              O prazo de entrega é estimado e pode variar conforme a localidade e o método de envio escolhido.
              Não nos responsabilizamos por atrasos causados por fatores externos, como problemas com 
              transportadoras ou eventos de força maior.
            </p>
            <p>
              É responsabilidade do cliente fornecer um endereço de entrega correto e completo. Pedidos com 
              informações incorretas podem resultar em atrasos ou cancelamentos.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Política de Trocas e Devoluções</h2>
            <p className="mb-4">
              Os produtos podem ser trocados ou devolvidos em até 7 dias após o recebimento, desde que 
              estejam em perfeito estado, sem sinais de uso e em sua embalagem original.
            </p>
            <p>
              Para produtos com defeito, o prazo para solicitação de troca é de 30 dias após o recebimento.
              O processo de troca ou devolução deve ser iniciado através de nosso serviço de atendimento 
              ao cliente.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
            <p>
              A Card Kingdom não será responsável por quaisquer danos diretos, indiretos, incidentais, 
              consequenciais ou punitivos resultantes do uso ou incapacidade de uso do site ou dos produtos 
              adquiridos, exceto quando previsto em lei.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes 
              termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Alterações nos Termos</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações 
              entram em vigor imediatamente após sua publicação no site. O uso continuado do site após a 
              publicação de alterações constitui aceitação dessas mudanças.
            </p>
            <p>
              Última atualização destes termos: 1 de abril de 2023
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
