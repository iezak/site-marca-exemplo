import { Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contato</span>
          <h1>Fale com a marca</h1>
          <p>
            Preencha o formulário abaixo para solicitar informações, tirar
            dúvidas ou pedir um orçamento.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Canais de atendimento</h2>
            <p>
              Estes dados podem ser trocados pelos contatos reais da cliente.
            </p>

            <div className="info-item">
              <Mail size={22} />
              <span>contato@marcaexemplo.com.br</span>
            </div>

            <div className="info-item">
              <Phone size={22} />
              <span>(00) 00000-0000</span>
            </div>

            <div className="info-item">
              <MapPin size={22} />
              <span>Cidade/UF - Brasil</span>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/SEU_ID_AQUI"
            method="POST"
          >
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="assunto">Assunto</label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Ex: orçamento, dúvida, parceria..."
              />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="6"
                placeholder="Digite sua mensagem"
                required
              />
            </div>

            <button className="button button--primary" type="submit">
              Enviar mensagem
            </button>

            <p className="form-note">
              Atenção: troque o endpoint do Formspree antes de publicar.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
