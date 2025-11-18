import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import SolutionsSection from '../components/Home/SolutionsSection';
import PartnersSection from '../components/Home/PartnersSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <PartnersSection />
    </>
  );
}

export default HomePage;