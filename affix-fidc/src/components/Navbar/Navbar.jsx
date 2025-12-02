// O Navbar (menu) é um dos componentes mais complexos para tornar responsivo, 
// pois ele muda drasticamente de um "menu hambúrguer" (no celular)
// para um menu horizontal (no desktop).

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Importe as duas versões da logo
import logoBranca from '../../assets/logo-grupo-affix-branco.png';  // Sua logo atual (branca)
import logoPreta from '../../assets/logo-grupo-affix-preta.png';  // A nova logo (preta)

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Estado para saber se rolou a página

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // Efeito para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 50px, ativa o efeito
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento ao sair da página
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Adicionamos a classe 'scrolled' se o estado for true
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      
      {/* 1. Logo */}
      <div className="navbar-logo">
        <Link to="/">
          {/* Troca a imagem dinamicamente: Se rolou, usa a PRETA, senão a BRANCA */}
          <img 
            src={scrolled ? logoPreta : logoBranca} 
            alt="Affix FIDC Logo" 
            className="logo-image" 
          />
        </Link>
      </div>

      {/* 2. Links de Navegação (Centralizados via CSS) */}
      <nav className={`navbar-links ${menuAberto ? 'active' : ''}`}>
        <ul>
          <li><Link to="/quem-somos" onClick={toggleMenu}>Quem Somos</Link></li>
          <li><Link to="/solucoes" onClick={toggleMenu}>Soluções</Link></li>
          <li><Link to="/contato" onClick={toggleMenu}>Contato</Link></li>
        </ul>
      </nav>

      {/* 3. Botão Hambúrguer */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuAberto ? '✕' : '☰'}
      </div>
    </header>
  );
}

export default Navbar;