
import React from 'react';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

const ProjectsSection = () => {

  const projects = [
    {
      id: 1,
      title: "CodeCraft",
      description: "A learning platform to master programming languages with interactive tutorials and hands-on challenges",
      tech: ["React", "TypeScript", "CSS"],
      image: "/lovable-uploads/codecraft-project.png",
      githubLink: "https://github.com/HEMAHARSAN-3/Learning--Platform",
      liveDemo: "https://codecraftplatform.netlify.app/"
    },
    {
      id: 2,
      title: "Katomaran Todo",
      description: "A modern todo application with clean interface and efficient task management",
      tech: ["React", "JavaScript", "CSS", "HTML"],
      image: "/lovable-uploads/1302bf8e-be95-40f3-a9aa-a2423eb781b6.png",
      githubLink: "https://github.com/HEMAHARSAN-3/Katomaran-Todo",
      liveDemo: null
    },
    {
      id: 3,
      title: "Italian Recipes Website",
      description: "A beautiful recipe website showcasing authentic Italian cuisine and cooking traditions",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/lovable-uploads/d5a924a5-0609-447b-84d4-008af454f126.png",
      githubLink: "https://github.com/HEMAHARSAN-3/Italian-Recipes-Website",
      liveDemo: "https://hemaharsan2005.neocities.org/Italian%20Recipes/italian_home"
    },
    {
      id: 4,
      title: "Pneumonia Prediction System",
      description: "AI-powered medical diagnosis system using Random Forest algorithm for pneumonia detection",
      tech: ["Python", "Machine Learning", "Random Forest", "Data Science"],
      image: "/lovable-uploads/633735c4-8971-46e0-9028-35e51e8a3316.png",
      githubLink: "https://github.com/HEMAHARSAN-3/PNEUMONIA-PREDICTION-USING-RANDOM-FOREST",
      liveDemo: null
    },
    {
      id: 5,
      title: "My Resume",
      description: "Interactive resume website with clean design and professional presentation",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/lovable-uploads/f12a03c4-9966-4d36-976c-8a86faf6e877.png",
      githubLink: "https://github.com/HEMAHARSAN-3/My-Resume",
      liveDemo: "https://my-resume-website-using-html-css.netlify.app/"
    },
    {
      id: 6,
      title: "My-Portfolio",
      description: "A personal portfolio website built to highlight professional skills, projects, and achievements.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/lovable-uploads/79546a28-e801-40ae-9331-252f83368b9a.png",
      githubLink: "https://github.com/HEMAHARSAN-3/My-Portfolio",
      liveDemo: "https://hema-harsan-portfolio.netlify.app/"
    }
  ];


  return (
    <section 
      id="projects" 
      className="projects-section dark-section section-padding pt-40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my latest work in web development and AI/ML applications
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative cursor-pointer"
            >
              {/* Card Content */}
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Project Image */}
                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-cyber-purple to-cyber-blue">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Info */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-neon-blue border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons - Positioned at bottom */}
                  <div className="flex gap-3 mt-auto pt-4">
                    {project.liveDemo && project.liveDemo !== "#" && (
                      <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass-card text-black text-sm rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30"
                      >
                        <ArrowSquareOut size={16} weight="light" />
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-card text-white text-sm rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/30"
                    >
                      <GithubLogo size={16} weight="light" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
