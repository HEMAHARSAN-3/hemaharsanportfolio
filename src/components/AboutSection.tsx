
import React from 'react';
import { useScrollRevealChildren } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const sectionRef = useScrollRevealChildren({ staggerDelay: 150 });

  return (
    <section 
      id="about" 
      className="dark-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Professional Photo - Left Column */}
          <div data-reveal data-reveal-index={0} className="reveal-left relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[550px]">
              <div 
                className="absolute -inset-8 rounded-2xl blur-3xl opacity-30"
                style={{ background: 'hsl(190 95% 65%)' }}
              ></div>
              <div 
                className="relative w-full h-full rounded-2xl p-1 overflow-hidden"
                style={{ background: `linear-gradient(135deg, hsl(190 95% 65%), hsl(190 85% 55%))` }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ background: 'hsl(0 0% 7%)' }}>
                  <img 
                    src="/lovable-uploads/c828580d-3958-4a05-b94c-6c010bed823b.png" 
                    alt="Hema Harsan R - AI & Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full blur-md opacity-60" style={{ background: 'hsl(190 95% 65%)' }}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full blur-lg opacity-40" style={{ background: 'hsl(190 85% 55%)' }}></div>
            </div>
          </div>

          {/* Text Content - Right Column */}
          <div data-reveal data-reveal-index={1} className="reveal-right order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8">About Me</h2>
            <div className="space-y-6 text-white/90">
              <p className="text-lg md:text-xl leading-relaxed">
                Hi, I'm <span className="text-gradient font-semibold">Hema Harsan R</span> — a passionate B.Tech student specializing in 
                <span className="font-medium" style={{ color: 'hsl(190 95% 65%)' }}> Artificial Intelligence & Data Science</span>, with a deep love for 
                <span className="font-medium" style={{ color: 'hsl(190 85% 55%)' }}> Full Stack Development</span>.
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Currently in my <span className="font-medium" style={{ color: 'hsl(190 95% 65%)' }}>4th year at Dr. N.G.P. Institute of Technology</span>, 
                I love building smart, meaningful solutions that blend cutting-edge technology with creative innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a href="#projects" className="flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105" style={{ background: 'hsl(190 95% 65%)', color: 'hsl(0 0% 7%)' }}>
                  View My Work <span>→</span>
                </a>
                <a href="#contact" className="flex items-center justify-center gap-3 px-6 py-3 glass-card font-semibold rounded-xl text-white border transition-all duration-300 hover:scale-105" style={{ borderColor: 'hsl(190 95% 65% / 0.5)' }}>
                  Let's Connect <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
