import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import SolutionsSection from '../components/Home/SolutionsSection';
import PartnersSection from '../components/Home/PartnersSection';
import CtaSection from '../components/Home/CtaSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}

export default HomePage;