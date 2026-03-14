
import React from 'react';
import Preloader from '../components/Preloader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import Navigation from '../components/Navigation';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        
        {/* Background floating orbs — CSS-only animation */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb w-24 h-24 md:w-32 md:h-32 top-20 left-10 opacity-20" style={{ animationDelay: '0s' }}></div>
          <div className="floating-orb w-20 h-20 md:w-28 md:h-28 top-1/2 right-20 opacity-15" style={{ animationDelay: '2s' }}></div>
          <div className="floating-orb w-28 h-28 md:w-36 md:h-36 bottom-40 left-1/4 opacity-20" style={{ animationDelay: '4s' }}></div>
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
        
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
