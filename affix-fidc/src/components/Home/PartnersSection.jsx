import React from 'react';
import './PartnersSection.css';

// 1. Importando os logos dos parceiros
import qcertifica from '../../assets/logo-qcertifica.png';
import bradesco from '../../assets/logo-bradesco.png';
import singulare from '../../assets/logo-singulare.png';
import credithub from '../../assets/logo-credithub.png';
import brb from '../../assets/logo-brb.png';
import austin from '../../assets/logo-austin.png';
import crdc from '../../assets/logo-crdc.png';
import ouroPreto from '../../assets/logo-ouro-preto.png';

function PartnersSection() {
  // 2. Array com as imagens importadas
  const partners = [
    { src: qcertifica, alt: "QCertifica" },
    { src: bradesco, alt: "Bradesco" },
    { src: singulare, alt: "Singulare" },
    { src: credithub, alt: "CreditHub" },
    { src: brb, alt: "BRB" },
    { src: austin, alt: "Austin Rating" },
    { src: crdc, alt: "CRDC" },
    { src: ouroPreto, alt: "Ouro Preto Investimentos" },
  ];

  return (
    <section className="partners-container">
      <h2 className="partners-title">Nossos Parceiros Estratégicos</h2>
      
      <div className="partners-scroller" data-animated="true">
        <div className="partners-track">
          
          {/* 3. Renderiza a 1ª lista de Logos (Original) */}
          {partners.map((partner, index) => (
            <div className="partner-item" key={`orig-${index}`}>
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}

          {/* 4. Renderiza a 2ª lista de Logos (Duplicata para efeito infinito) */}
          {partners.map((partner, index) => (
            <div className="partner-item" key={`dup-${index}`} aria-hidden="true">
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;