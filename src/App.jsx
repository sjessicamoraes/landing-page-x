import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-white">

      <header className="flex items-center justify-between px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-600">Meu Negócio</h1>

        <nav className="space-x-4 block">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#sobre" className="text-gray-700 hover:text-blue-600">Sobre</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600">Contato</a>
        </nav>

        <a href="#contato" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
          Fale comigo
        </a>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Dê visibilidade ao seu negócio com um site profissional
          </h2>
          <p className="text-gray-600 text-lg">
            Crie presença online com uma landing page simples, bonita e eficiente. Ideal para pequenos empreendedores, autônomos e prestadores de serviço.
          </p>
          <a
            href="#contato"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-base"
          >
            Solicitar orçamento
          </a>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Ilustração de site"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section id="sobre" className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Sobre nós</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Somos especialistas em criação de páginas simples, funcionais e com foco em conversão.
            Nosso objetivo é ajudar pequenos negócios a terem presença digital sem complicação.
          </p>
          <p className="text-gray-600">
            Atuamos com transparência, agilidade e foco em entregar o que realmente importa:
            um site que funcione para o seu cliente final.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white" id="servicos">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-gray-800">Serviços</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Landing Pages</h3>
              <p className="text-gray-600">Criação de páginas rápidas, modernas e responsivas para divulgação de negócios e produtos.</p>
            </div>

            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">APIs com Node.js</h3>
              <p className="text-gray-600">Desenvolvimento de APIs simples para cadastro de clientes, produtos e integrações.</p>
            </div>

            <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Formulários Integrados</h3>
              <p className="text-gray-600">Formulários com envio para e-mail, planilhas ou WhatsApp, ideais para captação de clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Fale comigo</h2>
          <p className="text-gray-600">
            Ficou com alguma dúvida ou quer pedir um orçamento? Preencha o formulário ou me chame no WhatsApp.
          </p>

          <form
            action="https://formspree.io/f/xldnbprg"
            method="POST"
            className="space-y-4 text-left"
          >
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              name="mensagem"
              rows="4"
              placeholder="Escreva sua mensagem..."
              className="w-full px-4 py-2 border rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>

          <div>
            <a
              href="https://wa.me/5511965975811"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp size={20} />
              Falar no WhatsApp
            </a>

          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
