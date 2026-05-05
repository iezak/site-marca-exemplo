import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function Home() {
  const servicos = [
    {
      titulo: "Identidade da marca",
      texto: "Apresente sua empresa de forma clara, bonita e profissional.",
    },
    {
      titulo: "Produtos e serviços",
      texto: "Mostre o que a marca oferece com cards, fotos e descrições.",
    },
    {
      titulo: "Contato fácil",
      texto: "Receba mensagens pelo formulário integrado ao Formspree.",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="eyebrow">Site institucional</span>
            <h1>Uma presença digital simples, bonita e profissional.</h1>
            <p>
              Este é um modelo base para uma marca apresentar sua história,
              produtos, serviços e canais de contato.
            </p>

            <div className="hero__actions">
              <Link to="/contato" className="button button--primary">
                Solicitar orçamento <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="button button--secondary">
                Conhecer a marca
              </Link>
            </div>
          </div>

          <div className="hero__card">
            <div className="hero__image-placeholder">
              <Star size={54} />
              <p>Espaço para foto principal, produto ou banner da marca.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__title">
            <span className="eyebrow">O que o site pode ter</span>
            <h2>Estrutura pensada para marcas pequenas e médias</h2>
            <p>
              Você pode adaptar esses blocos para moda, estética, móveis,
              arquitetura, serviços, produtos artesanais ou qualquer negócio
              institucional.
            </p>
          </div>

          <div className="cards">
            {servicos.map((servico) => (
              <article className="card" key={servico.titulo}>
                <CheckCircle size={28} />
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="container highlight">
          <div>
            <span className="eyebrow">Chamada final</span>
            <h2>Pronto para transformar visitantes em contatos?</h2>
            <p>
              Uma boa página precisa explicar o que a marca faz, passar
              confiança e facilitar o contato do cliente.
            </p>
          </div>

          <Link to="/contato" className="button button--primary">
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}
