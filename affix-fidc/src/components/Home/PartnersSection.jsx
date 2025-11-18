
import React from 'react';
import './PartnersSection.css'; // Importando os estilos

function PartnersSection() {
  // Lista de parceiros (vamos usar placeholders)
  const partners = [
    "PARCEIRO 1",
    "PARCEIRO 2",
    "PARCEIRO 3",
    "PARCEIRO 4",
    "PARCEIRO 5",
    "PARCEIRO 6"
  ];

  return (
    <section className="partners-container">
      <h2 className="partners-title">Nossos Parceiros Estratégicos</h2>
      
      {/* O 'scroller' é a "janela" visível. 
        O 'data-animated="true"' é um truque para o CSS 
        saber se deve aplicar a animação.
      */}
      <div className="partners-scroller" data-animated="true">
        {/* O 'track' é a esteira que se move */}
        <div className="partners-track">
          
          {/* 1ª Lista de Logos */}
          {partners.map((name, index) => (
            <div className="partner-logo" key={`p1-${index}`}>
              {name}
            </div>
          ))}

          {/* 2ª Lista (Duplicada para o efeito infinito) */}
          {/* A 'key' é diferente e 'aria-hidden' é bom para acessibilidade */}
          {partners.map((name, index) => (
            <div className="partner-logo" key={`p2-${index}`} aria-hidden="true">
              {name}
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;