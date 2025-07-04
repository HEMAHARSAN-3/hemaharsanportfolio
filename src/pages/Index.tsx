
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '../components/Preloader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll and animations
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([".hero-content", ".about-section", ".skills-section", ".projects-section", ".contact-section"], {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      });

      // Create timeline for page load
      const tl = gsap.timeline();
      
      tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        delay: 3.5 // After preloader
      });

      // Section animations on scroll
      [".about-section", ".skills-section", ".projects-section", ".contact-section"].forEach((selector, index) => {
        ScrollTrigger.create({
          trigger: selector,
          start: "top 80%",
          onEnter: () => {
            gsap.to(selector, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.out"
            });
          }
        });
      });

      // Enhanced floating background elements
      gsap.to(".floating-orb", {
        y: -25,
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Preloader />
      <div ref={containerRef} className="relative min-h-screen">
        <Navigation />
        
        {/* Enhanced background floating orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb w-32 h-32 top-20 left-10 opacity-30"></div>
          <div className="floating-orb w-24 h-24 top-1/3 right-20 opacity-20"></div>
          <div className="floating-orb w-40 h-40 bottom-40 left-1/4 opacity-25"></div>
          <div className="floating-orb w-28 h-28 top-1/2 right-1/3 opacity-15"></div>
          <div className="floating-orb w-20 h-20 top-3/4 left-1/2 opacity-20"></div>
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <div className="pt-16">
          <ProjectsSection />
        </div>
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
