// O Navbar (menu) é um dos componentes mais complexos para tornar responsivo, 
// pois ele muda drasticamente de um "menu hambúrguer" (no celular)
// para um menu horizontal (no desktop).

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importando nossos estilos CSS

function Navbar() {
  // 'menuAberto' é o nosso estado. 'setMenuAberto' é a função que o altera.
  // Começa como 'false' (menu fechado).
  const [menuAberto, setMenuAberto] = useState(false);

  // Esta função será chamada pelo botão 'hambúrguer' ou pelo 'X'.
  // Ela inverte o valor de 'menuAberto'.
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="navbar-container">
      {/* 1. Logo (que também é um link para a Home) */}
      <div className="navbar-logo">
        <Link to="/">Affix FIDC</Link>
      </div>

      {/* 2. Links de Navegação */}
      {/* Aplicamos a classe 'active' se o menuAberto for verdadeiro */}
      <nav className={`navbar-links ${menuAberto ? 'active' : ''}`}>
        <ul>
          {/* Usamos onClick={toggleMenu} aqui para fechar o menu 
              automaticamente ao clicar em um link no mobile */}
          <li><Link to="/quem-somos" onClick={toggleMenu}>Quem Somos</Link></li>
          <li><Link to="/solucoes" onClick={toggleMenu}>Soluções</Link></li>
          <li><Link to="/contato" onClick={toggleMenu}>Contato</Link></li>
        </ul>
      </nav>

      {/* 3. Botão Hambúrguer/Fechar (Controle do Menu Mobile) */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {/* Mostra 'X' se o menu estiver aberto, ou '☰' se estiver fechado */}
        {menuAberto ? '✕' : '☰'}
      </div>
    </header>
  );
}

export default Navbar;