import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css'; // Importando os estilos

function AboutSection() {
  return (
    <section className="about-container">
      <div className="about-grid">
        
        {/* Coluna 1: Conteúdo de Texto */}
        <div className="about-content">
          <span className="about-tagline">Quem Somos</span>
          <h2 className="about-title">
            Transformando o Mercado de Crédito com Solidez e Inovação.
          </h2>
          <p className="about-description">
            Fundada sobre os pilares da transparência e da excelência, a 
            Affix FIDC é especialista na estruturação de Fundos de 
            Investimento em Direitos Creditórios. 
          </p>
          <p className="about-description">
            Nossa missão é fornecer liquidez e capital de giro para empresas 
            em crescimento, atuando como um parceiro estratégico e 
            confiável no fomento comercial.
          </p>
          <Link to="/quem-somos" className="about-cta-button">
            Saiba Mais
          </Link>
        </div>

        {/* Coluna 2: Visual (Pode ser uma imagem) */}
        <div className="about-visual">
          {/* Por enquanto, usaremos um 'placeholder' visual 
              estilizado com CSS. No futuro, podemos trocar 
              por <img src="..." alt="..." /> 
          */}
          <div className="visual-placeholder">
             {/* 

[Image of abstract financial graph]
 */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;