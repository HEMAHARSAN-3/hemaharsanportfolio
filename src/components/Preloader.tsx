
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Simple logo fade in
    tl.from(logoRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });

    // Progress bar animation with percentage counter
    let progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 1,
      ease: "power2.out",
      onUpdate: function() {
        const val = Math.round(progress.value);
        if (progressRef.current) {
          progressRef.current.style.width = `${val}%`;
        }
        if (percentageRef.current) {
          percentageRef.current.textContent = `${val}%`;
        }
      }
    }, "-=0.2");

    // Exit animation
    tl.to([logoRef.current, progressRef.current?.parentElement, percentageRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      delay: 0.1
    }).to(preloaderRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      }
    });

  }, []);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-darker">
      <div className="text-center">
        {/* Minimal Logo */}
        <div 
          ref={logoRef}
          className="text-4xl font-bold text-white mb-12"
        >
          HH
        </div>
        
        {/* Simple Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              ref={progressRef}
              className="h-full w-0 bg-white rounded-full transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Percentage */}
        <div 
          ref={percentageRef}
          className="text-sm text-white/80 font-medium"
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
