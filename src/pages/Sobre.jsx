import { Award, Heart, ShieldCheck } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Sobre a marca</span>
          <h1>Uma marca criada para entregar confiança e qualidade.</h1>
          <p>
            Esta página serve para contar a história da empresa, explicar seus
            diferenciais e mostrar por que o cliente pode confiar no trabalho.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>Nossa história</h2>
            <p>
              A Marca Exemplo nasceu com o objetivo de oferecer soluções
              simples, bem feitas e alinhadas às necessidades de seus clientes.
              Aqui entra um texto real contando quando a marca começou, qual é
              seu propósito e como ela atua.
            </p>
            <p>
              O ideal é usar uma linguagem próxima, profissional e direta,
              mostrando experiência, cuidado e diferenciais reais.
            </p>
          </div>

          <div className="about-box">
            <h3>Informações rápidas</h3>
            <ul>
              <li>Atendimento personalizado</li>
              <li>Produtos ou serviços sob medida</li>
              <li>Compromisso com prazo e qualidade</li>
              <li>Comunicação clara com o cliente</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__title">
            <span className="eyebrow">Valores</span>
            <h2>O que guia nosso trabalho</h2>
          </div>

          <div className="cards">
            <article className="card">
              <Heart size={28} />
              <h3>Cuidado</h3>
              <p>Cada detalhe é pensado para gerar uma boa experiência.</p>
            </article>

            <article className="card">
              <ShieldCheck size={28} />
              <h3>Confiança</h3>
              <p>Atendimento claro, transparente e responsável.</p>
            </article>

            <article className="card">
              <Award size={28} />
              <h3>Qualidade</h3>
              <p>Entrega bem feita, visual profissional e conteúdo objetivo.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
