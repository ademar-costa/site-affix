import React from 'react';
// 1. Importe o nosso novo componente de seção
import HeroSection from '../components/home/HeroSection';
// Futuramente, importaremos outras seções aqui (ex: AboutSection, ServicesSection)

function HomePage() {
  return (
    <>
      {/* 2. Renderize a seção */}
      <HeroSection />

      {/* <AboutSection />
        <ServicesSection />
        ... etc ... 
      */}
    </>
  );
}

export default HomePage;