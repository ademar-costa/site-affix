import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionsSection.css'; // Importando os estilos

function SolutionsSection() {
  return (
    <section className="solutions-container">
      <div className="solutions-header">
        <span className="solutions-tagline">Nossas Soluções</span>
        <h2 className="solutions-title">
          Soluções Financeiras Sob Medida
        </h2>
        <p className="solutions-subtitle">
          Oferecemos uma gama de serviços para otimizar a saúde financeira 
          da sua empresa, com agilidade e segurança.
        </p>
      </div>

      {/* Grid que segura os cards */}
      <div className="solutions-grid">
        
        {/* Card 1 */}
        <div className="solution-card">
          <div className="solution-icon">[Icone 1]</div>
          <h3 className="solution-card-title">Antecipação de Recebíveis</h3>
          <p className="solution-card-description">
            Transforme suas vendas a prazo em capital de giro imediato. 
            Liquidez rápida para o seu fluxo de caixa.
          </p>
        </div>

        {/* Card 2 */}
        <div className="solution-card">
          <div className="solution-icon">[Icone 2]</div>
          <h3 className="solution-card-title">Estruturação de FIDC</h3>
          <p className="solution-card-description">
            Análise e estruturação completa de Fundos de Investimento em 
            Direitos Creditórios (FIDC) para o seu negócio.
          </p>
        </div>

        {/* Card 3 */}
        <div className="solution-card">
          <div className="solution-icon">[Icone 3]</div>
          <h3 className="solution-card-title">Consultoria de Crédito</h3>
          <p className="solution-card-description">
            Análise de risco e consultoria especializada para otimizar sua 
            carteira de recebíveis e maximizar resultados.
          </p>
        </div>
      </div>

      {/* Botão CTA Principal da Seção */}
      <div className="solutions-cta-container">
        <Link to="/solucoes" className="solutions-main-cta">
          Ver Todas as Soluções
        </Link>
      </div>
    </section>
  );
}

export default SolutionsSection;