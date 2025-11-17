import React from 'react';
import { Link } from 'react-router-dom'; // Para o botão CTA
import './HeroSection.css'; // Importando os estilos

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">
          Inteligência Financeira para Estruturar seu Crescimento.
        </h1>
        <p className="hero-subheadline">
          A Affix FIDC oferece soluções de crédito personalizadas e seguras 
          para otimizar o fluxo de caixa da sua empresa.
        </p>
        
        {/* Este é o nosso Call to Action (Chamada para Ação) */}
        <Link to="/solucoes" className="hero-cta-button">
          Conheça Nossas Soluções
        </Link>
      </div>
      
      {/* Futuramente, podemos adicionar uma imagem de fundo 
        ou um gráfico elegante no CSS 
      */}
    </section>
  );
}

export default HeroSection; 