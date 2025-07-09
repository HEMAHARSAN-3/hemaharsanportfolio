
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

      // Set initial states with better performance
      gsap.set([".hero-content", ".about-section", ".skills-section", ".projects-section", ".achievements-section", ".contact-section"], {
        opacity: 0,
        y: 30,
        filter: "blur(5px)",
        will: "change"
      });

      // Create optimized timeline for page load
      const tl = gsap.timeline();
      
      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
        delay: 3.5
      });

      // Optimized section animations on scroll
      [".about-section", ".skills-section", ".projects-section", ".achievements-section", ".contact-section"].forEach((selector) => {
        ScrollTrigger.create({
          trigger: selector,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.to(selector, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.out"
            });
          }
        });
      });

      // Optimized floating background elements
      gsap.to(".floating-orb", {
        y: -15,
        x: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader />
      <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        
        {/* Optimized background floating orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb w-20 h-20 md:w-32 md:h-32 top-20 left-4 md:left-10 opacity-20 md:opacity-30"></div>
          <div className="floating-orb w-16 h-16 md:w-24 md:h-24 top-1/3 right-10 md:right-20 opacity-15 md:opacity-20"></div>
          <div className="floating-orb w-24 h-24 md:w-40 md:h-40 bottom-40 left-1/4 opacity-20 md:opacity-25"></div>
          <div className="floating-orb w-18 h-18 md:w-28 md:h-28 top-1/2 right-1/3 opacity-10 md:opacity-15"></div>
          <div className="floating-orb w-12 h-12 md:w-20 md:h-20 top-3/4 left-1/2 opacity-15 md:opacity-20"></div>
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
