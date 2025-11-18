import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection'; 

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* 2. Renderize a nova seção */}
      <AboutSection />
    </>
  );
}

export default HomePage;