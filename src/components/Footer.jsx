export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>Marca Exemplo</h3>
          <p>
            Site institucional modelo para apresentar uma marca, seus serviços
            e seus canais de contato.
          </p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>contato@marcaexemplo.com.br</p>
          <p>(00) 00000-0000</p>
        </div>

        <div>
          <h4>Redes sociais</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Marca Exemplo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
