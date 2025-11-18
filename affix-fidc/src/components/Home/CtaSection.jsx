import React from 'react';
import { Link } from 'react-router-dom';
import './CtaSection.css'; // Importando os estilos

function CtaSection() {
  return (
    <section className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">
          Pronto para dar o próximo passo?
        </h2>
        <p className="cta-subtitle">
          Nossa equipe de especialistas está pronta para analisar 
          suas necessidades e propor a melhor solução de crédito 
          para o seu negócio.
        </p>
        <Link to="/contato" className="cta-button">
          Entre em Contato
        </Link>
      </div>
    </section>
  );
}

export default CtaSection;