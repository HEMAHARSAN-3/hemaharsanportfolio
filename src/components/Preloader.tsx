
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Progress bar animation
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out"
    }, "-=0.5");

    // Logo pulse during loading
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Complete loading sequence
    tl.to(progressRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    }).to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      }
    });

  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="text-center">
        {/* Animated Logo */}
        <div 
          ref={logoRef}
          className="text-8xl md:text-9xl font-bold text-gradient mb-12"
        >
          HH
        </div>
        
        {/* Loading Text */}
        <div className="text-xl md:text-2xl text-white/80 mb-8 font-light">
          Loading Experience...
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-80 max-w-sm mx-auto h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="progress-bar h-full w-0"
          ></div>
        </div>
        
        {/* Loading percentage */}
        <div className="text-sm text-white/60 mt-4 font-light">
          Initializing...
        </div>
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
