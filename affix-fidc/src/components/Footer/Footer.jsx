import React from 'react'
import './Footer.css'

function Footer(){
    // Pega o ano atual e atualiza socinho

    const anoAtual = new Date().getFullYear();

    return(
        <footer className="footer-container">
        <div className="footer-content">
        
        {/* Coluna 1: Logo e Copyright */}
        <div className="footer-logo-copyright">
          <h3 className="footer-logo">Affix FIDC</h3>
          <small className="footer-copyright">
            © {anoAtual} Affix FIDC. Todos os direitos reservados.
          </small>
        </div>

        {/* Coluna 2: Links Rápidos (Exemplo) */}
        {/* Mesmo que não os tenhamos agora, é bom deixar a estrutura.
            No mobile, isso ficará embaixo da logo. */}
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quem-somos">Quem Somos</a></li>
            <li><a href="/solucoes">Soluções</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato (Exemplo) */}
        <div className="footer-contato">
          <h4>Contato</h4>
          <p>contato@affix.com.br</p>
          <p>+55 (11) 99999-8888</p>
          <p>Av. Principal, 123 - São Paulo/SP</p>
        </div>

      </div>
      <div className="footer-bottom-bar">
        <p>Desenvolvido com 💙 por [Seu Nome/Sua Agência]</p>
      </div>
    </footer>
  );
}
export default Footer;