import { Award, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className="eyebrow">Sobre a marca</span>
            <h1>Uma marca criada para entregar confiança e qualidade.</h1>
            <p>
              Esta página serve para contar a história da empresa, explicar seus
              diferenciais e mostrar por que o cliente pode confiar no trabalho.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section">
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

          <motion.div
            className="about-box"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Informações rápidas</h3>
            <ul>
              <li>Atendimento personalizado</li>
              <li>Produtos ou serviços sob medida</li>
              <li>Compromisso com prazo e qualidade</li>
              <li>Comunicação clara com o cliente</li>
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft">
        <div className="container">
          <div className="section__title">
            <span className="eyebrow">Valores</span>
            <h2>O que guia nosso trabalho</h2>
          </div>

          <motion.div
            className="cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {[
              ["Cuidado", "Cada detalhe é pensado para gerar uma boa experiência.", Heart],
              ["Confiança", "Atendimento claro, transparente e responsável.", ShieldCheck],
              ["Qualidade", "Entrega bem feita, visual profissional e conteúdo objetivo.", Award],
            ].map(([titulo, texto, Icone]) => (
              <motion.article
                className="card"
                key={titulo}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.015 }}
              >
                <Icone size={28} />
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}
