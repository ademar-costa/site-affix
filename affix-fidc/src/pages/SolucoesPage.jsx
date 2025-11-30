// src/pages/SolucoesPage.jsx

import React, { useEffect } from 'react';
import './SolucoesPage.css';
import CtaSection from '../components/Home/CtaSection';

function SolucoesPage() {
  
  // Rola para o topo ao abrir a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Cabeçalho */}
      <header className="page-header">
        <h1 className="page-title">Nossas Soluções</h1>
        <p className="page-subtitle">
          Estratégias financeiras personalizadas para dar liquidez 
          e segurança ao seu fluxo de caixa.
        </p>
      </header>

      {/* 2. Lista de Serviços */}
      <section className="solutions-list">
        <div className="solutions-wrapper">

          {/* SERVIÇO 1: Antecipação (Normal) */}
          <div className="service-item">
            <div className="service-text">
              <h2>Antecipação de Recebíveis</h2>
              <p>
                Transforme suas vendas a prazo (duplicatas, cheques, contratos) 
                em recursos imediatos. A antecipação de recebíveis é a forma 
                mais ágil de equilibrar seu fluxo de caixa sem criar dívidas 
                bancárias.
              </p>
              <ul className="service-features">
                <li>Taxas competitivas e transparentes.</li>
                <li>Operação 100% digital e segura.</li>
                <li>Não consome limite de crédito bancário.</li>
              </ul>
            </div>
            <div className="service-visual">
              [Imagem: Gráfico de Fluxo de Caixa]
            </div>
          </div>

          {/* SERVIÇO 2: FIDC (Invertido / Reverse) */}
          {/* Note a classe 'reverse' aqui */}
          <div className="service-item reverse">
            <div className="service-text">
              <h2>Estruturação de FIDC</h2>
              <p>
                Para empresas com grande volume de recebíveis, estruturamos 
                Fundos de Investimento em Direitos Creditórios (FIDC) exclusivos. 
                Isso permite captar recursos no mercado de capitais com custos 
                mais baixos e maior eficiência tributária.
              </p>
              <ul className="service-features">
                <li>Acesso ao mercado de capitais.</li>
                <li>Isenção de IOF/PIS/COFINS na carteira do fundo.</li>
                <li>Governança corporativa aprimorada.</li>
              </ul>
            </div>
            <div className="service-visual">
              [Imagem: Estrutura de Fundo]
            </div>
          </div>

          {/* SERVIÇO 3: Consultoria (Normal) */}
          <div className="service-item">
            <div className="service-text">
              <h2>Gestão e Análise de Crédito</h2>
              <p>
                Mitigue riscos antes de vender. Nossa equipe realiza análises 
                aprofundadas da saúde financeira dos seus clientes (sacados), 
                ajudando sua empresa a definir limites de crédito seguros.
              </p>
              <ul className="service-features">
                <li>Relatórios detalhados de risco.</li>
                <li>Monitoramento constante da carteira.</li>
                <li>Redução da inadimplência.</li>
              </ul>
            </div>
            <div className="service-visual">
              [Imagem: Análise de Risco]
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Final */}
      <CtaSection />
    </>
  );
}

export default SolucoesPage;