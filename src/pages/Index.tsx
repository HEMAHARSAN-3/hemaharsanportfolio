
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll and animations
    const ctx = gsap.context(() => {
      // Smooth scroll configuration
      gsap.config({
        force3D: true,
      });

      // Set initial states - simplified
      gsap.set([".hero-content", ".about-section", ".skills-section", ".projects-section", ".achievements-section", ".contact-section"], {
        opacity: 0,
        y: 20
      });

      // Create optimized timeline for page load
      const tl = gsap.timeline();
      
      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 2
      });

      // Simplified section animations on scroll
      [".about-section", ".skills-section", ".projects-section", ".achievements-section", ".contact-section"].forEach((selector) => {
        ScrollTrigger.create({
          trigger: selector,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => {
            gsap.to(selector, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      });

      // Simplified floating background elements
      gsap.to(".floating-orb", {
        y: -10,
        x: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader />
      <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        
        {/* Optimized background floating orbs - reduced count */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb w-24 h-24 md:w-32 md:h-32 top-20 left-10 opacity-20"></div>
          <div className="floating-orb w-20 h-20 md:w-28 md:h-28 top-1/2 right-20 opacity-15"></div>
          <div className="floating-orb w-28 h-28 md:w-36 md:h-36 bottom-40 left-1/4 opacity-20"></div>
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
