
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const navRef = useRef<HTMLNavElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navigation fade in
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 4 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    gsap.to(mobileMenuRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="glass-card px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            HH
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors duration-300 hover:text-neon-blue"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            <List size={24} weight="light" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-full bg-cyber-darker z-50 transform translate-x-full md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
            >
              <X size={24} weight="light" />
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-8 mt-20">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl text-white/80 hover:text-neon-blue transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
