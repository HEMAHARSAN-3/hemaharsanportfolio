
import React from 'react';

const AboutSection = () => {

  return (
    <section 
      id="about" 
      className="dark-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Title */}
        <div className="text-center mb-12 lg:hidden">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Profile Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Enhanced glowing background */}
              <div className="absolute -inset-12 bg-gradient-to-br from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-3">
                <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/c828580d-3958-4a05-b94c-6c010bed823b.png" 
                    alt="Hema Harsan R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating orbs with enhanced animations */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-neon-blue/40 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-neon-purple/30 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-16 w-10 h-10 bg-neon-pink/50 rounded-full blur-md animate-pulse delay-500"></div>
              <div className="absolute top-1/4 -left-12 w-12 h-12 bg-neon-green/30 rounded-full blur-lg animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Desktop Title */}
            <div className="hidden lg:block mb-8">
              <h2 className="text-5xl xl:text-6xl font-bold text-gradient mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
            </div>

            {/* Enhanced content cards */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Hi, I'm <span className="text-gradient font-semibold">Hema Harsan R</span> — a passionate B.Tech student specializing in 
                  <span className="text-neon-blue font-medium"> Artificial Intelligence & Data Science</span>, with a deep love for 
                  <span className="text-neon-purple font-medium"> Full Stack Development</span>.
                </p>
              </div>

              <div className="glass-card p-6">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Currently in my <span className="text-neon-pink font-medium">4th year at Dr. N.G.P. Institute of Technology</span>, 
                  I love building smart, meaningful solutions that blend cutting-edge technology with creative innovation. 
                  Whether it's developing dynamic web applications or exploring the latest AI trends, I'm always curious, 
                  always learning, and always pushing to turn ideas into impactful digital experiences.
                </p>
              </div>

              {/* Skills highlight */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-gradient mb-3">What I Do</h3>
                <div className="flex flex-wrap gap-3">
                  {['AI/ML Development', 'Full Stack Web Apps', 'Data Science', 'UI/UX Design'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#projects" 
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl"
              >
                View My Work 
                <span>→</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-3 px-6 py-3 glass-card border border-white/30 text-white font-semibold rounded-xl"
              >
                Let's Connect 
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
