// src/pages/QuemSomosPage.jsx

import React, { useEffect } from 'react';
import './QuemSomosPage.css'; // Importa o CSS específico desta página

// REUTILIZAÇÃO: Importamos o mesmo CTA da Home
import CtaSection from '../components/Home/CtaSection';

function QuemSomosPage() {
  
  // Este efeito garante que, ao abrir a página, 
  // o navegador role para o topo automaticamente.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Cabeçalho da Página */}
      <header className="page-header">
        <h1 className="page-title">Quem Somos</h1>
        <p className="page-subtitle">
          Solidez, transparência e expertise em direitos creditórios.
        </p>
      </header>

      {/* 2. Conteúdo Principal */}
      <section className="content-section">
        <div className="content-container">
          
          <div className="content-text">
            <h2>Nossa História</h2>
            <p>
              A Affix FIDC nasceu da necessidade de oferecer ao mercado uma alternativa 
              robusta e ágil para a antecipação de recebíveis. Com anos de experiência 
              no mercado financeiro, nossos sócios fundadores identificaram a lacuna 
              entre a burocracia bancária tradicional e a necessidade de liquidez 
              imediata das pequenas e médias empresas.
            </p>
            <p>
              Desde nossa fundação, atuamos estritamente de acordo com as normas da CVM 
              (Comissão de Valores Mobiliários), garantindo segurança jurídica e 
              operacional tanto para nossos cedentes quanto para nossos investidores.
            </p>

            <h2>Como Atuamos</h2>
            <p>
              Não somos apenas uma fonte de crédito; somos parceiros de crescimento. 
              Nossa equipe de análise utiliza tecnologia de ponta aliada a uma visão 
              humana do negócio para entender a realidade de cada cliente. Acreditamos 
              que o crédito bem estruturado é o combustível para a expansão econômica.
            </p>
          </div>

          {/* 3. Missão, Visão e Valores */}
          <div className="values-grid">
            <div className="value-card">
              <h3>Missão</h3>
              <p>
                Fomentar o crescimento empresarial através de soluções de crédito 
                inteligentes, ágeis e transparentes.
              </p>
            </div>
            <div className="value-card">
              <h3>Visão</h3>
              <p>
                Ser referência nacional em FIDC, reconhecida pela excelência no 
                atendimento e pela segurança em todas as operações.
              </p>
            </div>
            <div className="value-card">
              <h3>Valores</h3>
              <p>
                • Transparência absoluta.<br/>
                • Ética profissional.<br/>
                • Agilidade na decisão.<br/>
                • Parceria de longo prazo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA Final (Reutilizado) */}
      <CtaSection />
    </>
  );
}

export default QuemSomosPage;