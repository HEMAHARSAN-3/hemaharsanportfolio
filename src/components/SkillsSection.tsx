import React, { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const allSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", iconType: "image" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", iconType: "image" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", iconType: "image" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconType: "image" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconType: "image" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", iconType: "image" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconType: "image" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", iconType: "image" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", iconType: "image" },
    { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", iconType: "image" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", iconType: "image" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", iconType: "image" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", iconType: "image" },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", iconType: "image" },
    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", iconType: "image" },
    { name: "Deepseek", icon: "🤖", iconType: "emoji" },
    { name: "Lovable", icon: "💖", iconType: "emoji" },
    { name: "Replit", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg", iconType: "image" },
    { name: "Bolt AI", icon: "⚡", iconType: "emoji" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="dark-section section-padding pt-32"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tools I craft with precision and expertise
          </p>
        </div>

        {/* Honeycomb Grid */}
        <div className="flex justify-center items-center">
          <div className="relative max-w-5xl">
            <div className="flex flex-wrap justify-center gap-4">
              {allSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`hexagon-container group ${isVisible ? 'hexagon-enter' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className="hexagon">
                    <div className="hexagon-content">
                      {skill.iconType === "image" ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain mb-2"
                        />
                      ) : (
                        <span className="text-4xl mb-2">{skill.icon}</span>
                      )}
                      <span className="text-xs font-semibold text-white/90 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
