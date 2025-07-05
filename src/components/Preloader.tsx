
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation with enhanced effects
    tl.from(logoRef.current, {
      scale: 0.3,
      opacity: 0,
      rotation: -180,
      duration: 1.2,
      ease: "back.out(1.7)"
    });

    // Circular progress animation
    tl.from(circleRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // Progress bar animation with percentage counter
    let progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 2.5,
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
    }, "-=0.3");

    // Logo continuous pulse during loading
    gsap.to(logoRef.current, {
      scale: 1.15,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      transformOrigin: "center"
    });

    // Floating particles animation
    gsap.to(".preloader-particle", {
      y: -30,
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    // Complete loading sequence with enhanced exit
    tl.to([progressRef.current, percentageRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.6,
      delay: 0.5
    }).to(logoRef.current, {
      scale: 0.8,
      opacity: 0.8,
      duration: 0.8
    }, "-=0.3").to(preloaderRef.current, {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)",
      duration: 1.2,
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
      {/* Advanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,217,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Circular progress indicator */}
        <div className="relative mb-12">
          <div 
            ref={circleRef}
            className="w-40 h-40 mx-auto relative"
          >
            {/* Outer ring with glow */}
            <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
            <div className="absolute inset-2 rounded-full border-2 border-neon-blue/30 animate-spin" style={{animationDuration: '3s'}}></div>
            
            {/* Animated Logo */}
            <div 
              ref={logoRef}
              className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gradient"
              style={{
                background: 'linear-gradient(45deg, #00D9FF, #8B5CF6, #FF00FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))'
              }}
            >
              HH
            </div>
          </div>
        </div>
        
        {/* Enhanced loading text with glitch effect */}
        <div className="mb-8">
          <div className="text-2xl md:text-3xl text-white font-light mb-2 relative">
            <span className="relative z-10">Initializing Experience</span>
            <div className="absolute inset-0 text-neon-blue opacity-30 animate-pulse">Initializing Experience</div>
          </div>
          <div className="text-sm text-white/60 animate-pulse">Loading advanced portfolio systems...</div>
        </div>
        
        {/* Advanced progress bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/20">
            <div 
              ref={progressRef}
              className="progress-bar h-full w-0 relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #00D9FF, #8B5CF6, #FF00FF)',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Percentage display */}
        <div 
          ref={percentageRef}
          className="text-lg font-semibold text-neon-blue mb-8"
          style={{
            textShadow: '0 0 10px rgba(0, 217, 255, 0.8)'
          }}
        >
          0%
        </div>

        {/* Status indicators */}
        <div className="flex justify-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Systems Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Loading Assets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>Optimizing</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="preloader-particle absolute rounded-full opacity-40"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#00D9FF' : i % 3 === 1 ? '#8B5CF6' : '#FF00FF',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Matrix-style digital rain effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-neon-blue to-transparent opacity-60"
            style={{
              height: '100px',
              left: `${Math.random() * 100}%`,
              animation: `matrix-rain ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
