import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
// 1. Importe a nova seção
import SolutionsSection from '../components/Home/SolutionsSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* 2. Renderize a nova seção */}
      <SolutionsSection />
    </>
  );
}

export default HomePage;