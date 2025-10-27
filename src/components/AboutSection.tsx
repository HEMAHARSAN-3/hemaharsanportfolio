
import React from 'react';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="dark-section min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'hsl(120 88% 79%)' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image - Left Side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
              {/* Glowing background effect */}
              <div 
                className="absolute -inset-8 rounded-full blur-3xl opacity-30"
                style={{ background: 'hsl(120 88% 79%)' }}
              ></div>
              
              {/* Image container with border */}
              <div 
                className="relative w-full h-full rounded-2xl p-1"
                style={{ background: `linear-gradient(135deg, hsl(120 88% 79%), hsl(120 70% 60%))` }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden" style={{ background: 'hsl(0 0% 10%)' }}>
                  <img 
                    src="/lovable-uploads/c828580d-3958-4a05-b94c-6c010bed823b.png" 
                    alt="Hema Harsan R - AI & Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full blur-md opacity-60"
                style={{ background: 'hsl(120 88% 79%)' }}
              ></div>
              <div 
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full blur-lg opacity-40"
                style={{ background: 'hsl(120 70% 60%)' }}
              ></div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="glass-card p-6 lg:p-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Hi, I'm <span className="text-gradient font-semibold">Hema Harsan R</span> — a passionate B.Tech student specializing in 
                <span className="font-medium" style={{ color: 'hsl(120 88% 79%)' }}> Artificial Intelligence & Data Science</span>, with a deep love for 
                <span className="font-medium" style={{ color: 'hsl(120 70% 60%)' }}> Full Stack Development</span>.
              </p>
            </div>

            {/* Details */}
            <div className="glass-card p-6 lg:p-8">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Currently in my <span className="font-medium" style={{ color: 'hsl(120 88% 79%)' }}>4th year at Dr. N.G.P. Institute of Technology</span>, 
                I love building smart, meaningful solutions that blend cutting-edge technology with creative innovation. 
                Whether it's developing dynamic web applications or exploring the latest AI trends, I'm always curious, 
                always learning, and always pushing to turn ideas into impactful digital experiences.
              </p>
            </div>

            {/* Skills */}
            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-gradient mb-4">What I Do</h3>
              <div className="flex flex-wrap gap-3">
                {['AI/ML Development', 'Full Stack Web Apps', 'Data Science', 'UI/UX Design'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 backdrop-blur-sm rounded-full text-sm text-white border"
                    style={{ 
                      background: 'hsla(120, 88%, 79%, 0.1)',
                      borderColor: 'hsl(120 88% 79% / 0.3)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-xl"
                style={{ 
                  background: 'hsl(120 88% 79%)',
                  color: 'hsl(0 0% 10%)'
                }}
              >
                View My Work 
                <span>→</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-3 px-6 py-3 glass-card font-semibold rounded-xl text-white border"
                style={{ borderColor: 'hsl(120 88% 79% / 0.5)' }}
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
