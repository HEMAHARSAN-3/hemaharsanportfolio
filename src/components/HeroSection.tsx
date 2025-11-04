
import React from 'react';

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/orb-LLD7JkmD59ZtvGdh2EIUdGst/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      
      {/* Content Overlay - Centered */}
      <div className="hero-content relative z-10 section-padding w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-center min-h-screen">
          <div className="text-center max-w-3xl mx-auto">
            {/* Main Headline */}
            <h1 className="mb-4 md:mb-6 leading-tight">
              <span className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold block mb-2">
                Hi, I'm
              </span>
              <span className="text-gradient text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold block mb-2">
                Hema Harsan
              </span>
              <span className="text-white/80 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light block">
                Full Stack Developer
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="responsive-text-lg text-white/70 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology 
              and futuristic design principles.
            </p>
            
            {/* CTA Button */}
            <button 
              className="cta-button cyber-btn responsive-text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/70 via-transparent to-cyber-dark/30 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
