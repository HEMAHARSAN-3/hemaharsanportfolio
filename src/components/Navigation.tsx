
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simple CSS-based fade-in after page load
    const timer = setTimeout(() => {
      navRef.current?.classList.add('visible');
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="reveal-up fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-4 md:py-6"
      >
        <div className="glass-card px-4 md:px-6 py-3 md:py-4 flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl md:text-2xl font-bold text-gradient">HH</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="animated-link text-white/80 text-sm lg:text-base"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2 z-50 relative">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu — CSS transition instead of GSAP */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-full bg-cyber-darker z-50 md:hidden transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-xl text-white/80 py-3 border-b border-white/10 last:border-b-0"
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
