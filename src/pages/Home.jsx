import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

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
          <motion.div
            className="hero__text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="eyebrow" variants={itemVariants}>
              Site institucional
            </motion.span>

            <motion.h1 variants={itemVariants}>
              Uma presença digital simples, bonita e profissional.
            </motion.h1>

            <motion.p variants={itemVariants}>
              Este é um modelo base para uma marca apresentar sua história,
              produtos, serviços e canais de contato.
            </motion.p>

            <motion.div className="hero__actions" variants={itemVariants}>
              <Link to="/contato" className="button button--primary">
                Solicitar orçamento <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="button button--secondary">
                Conhecer a marca
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__card"
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          >
            <motion.div
              className="hero__image-placeholder"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <Star size={54} />
              <p>Espaço para foto principal, produto ou banner da marca.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <ArrowRight size={14} />
        </motion.div>
      </section>

      <AnimatedSection className="section">
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

          <motion.div
            className="cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicos.map((servico) => (
              <motion.article
                className="card"
                key={servico.titulo}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <CheckCircle size={28} />
                <h3>{servico.titulo}</h3>
                <p>{servico.texto}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--highlight">
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
      </AnimatedSection>
    </>
  );
}
