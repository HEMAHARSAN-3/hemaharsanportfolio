
import React from 'react';

const SkillsSection = () => {

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", iconType: "image" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", iconType: "image" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", iconType: "image" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", iconType: "image" }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", iconType: "image" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", iconType: "image" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", iconType: "image" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", iconType: "image" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", iconType: "image" },
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", iconType: "image" }
      ]
    },
    {
      title: "Programming Languages",
      color: "from-orange-500 to-red-400",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", iconType: "image" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", iconType: "image" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", iconType: "image" },
        { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", iconType: "image" }
      ]
    },
    {
      title: "AI Tools & Platforms",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", iconType: "image" },
        { name: "Deepseek", icon: "🤖", iconType: "emoji" },
        { name: "Lovable", icon: "💖", iconType: "emoji" },
        { name: "Replit", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg", iconType: "image" },
        { name: "Bolt AI", icon: "⚡", iconType: "emoji" }
      ]
    }
  ];


  return (
    <section 
      id="skills" 
      className="dark-section section-padding pt-32"
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

        {/* Skills Categories */}
        <div 
          className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="skill-category glass-card p-8 rounded-2xl"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full mb-4`}></div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => {
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-4 glass-card rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        boxShadow: 'hover:0 0 20px hsla(190, 95%, 65%, 0.3)'
                      }}
                    >
                      <div className="text-center">
                        {/* Icon */}
                        <div className="mb-3 flex justify-center items-center h-7">
                          {skill.iconType === "image" ? (
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-7 h-7 object-contain"
                            />
                          ) : (
                            <span className="text-2xl">{skill.icon}</span>
                          )}
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-white/90">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
