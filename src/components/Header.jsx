import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="logo" onClick={fecharMenu}>
          Marca<span>Exemplo</span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${menuAberto ? "nav--open" : ""}`}>
          <NavLink to="/" onClick={fecharMenu}>
            Início
          </NavLink>
          <NavLink to="/sobre" onClick={fecharMenu}>
            Sobre
          </NavLink>
          <NavLink to="/contato" onClick={fecharMenu}>
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
