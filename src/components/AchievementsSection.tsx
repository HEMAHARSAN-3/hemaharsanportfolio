
import React from 'react';
import { Trophy, Medal, Lightbulb } from 'lucide-react';

const AchievementsSection = () => {

  const participations = [
    {
      id: 1,
      title: "National Level 36-Hour HAC-Kathon'25",
      description: "Human-Animal Conflict Hackathon",
      organizer: "Sri Ramakrishna Engineering College & TN Forest Dept",
      date: "Mar 14–15, 2025",
      icon: Trophy,
      type: "hackathon"
    },
    {
      id: 2,
      title: "Automotive Cyber Security Workshop",
      description: "Technical Workshop on Cybersecurity",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491, Bannari Amman Institute of Technology",
      date: "2024",
      icon: Lightbulb,
      type: "workshop"
    },
    {
      id: 3,
      title: "Programming Quiz & Debugging Competition",
      description: "1st Place Winner",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491",
      date: "2024",
      icon: Trophy,
      type: "competition"
    },
    {
      id: 4,
      title: "Circuit Quiz & Debugging Competition",
      description: "4th Place",
      organizer: "Lumino 2K24 Symposium, IEEE SB-64491",
      date: "2024",
      icon: Medal,
      type: "competition"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Introduction to Industry 4.0 & Industrial IoT",
      institution: "NPTEL – IIT Kharagpur",
      credential: "ELITE Grade",
      icon: Trophy
    },
    {
      id: 2,
      title: "Advanced R Programming for Data Analytics in Business",
      institution: "NPTEL – IIT Kanpur",
      credential: "Certified",
      icon: Medal
    }
  ];


  return (
    <section 
      id="achievements" 
      className="dark-section section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing my journey through competitions, workshops, and professional certifications
          </p>
        </div>

        {/* Main Cards Container */}
        <div 
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Card: Participation */}
          <div className="glass-card p-8 border border-neon-blue/30">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg">
                  <Trophy size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  Hackathons & Competitions
                </h3>
              </div>

              <div className="space-y-6">
                {participations.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={item.id}
                      className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg">
                          <IconComponent size={20} className="text-neon-blue" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-white/80 text-sm mb-1">
                            {item.description}
                          </p>
                          <p className="text-white/60 text-sm mb-1">
                            {item.organizer}
                          </p>
                          <p className="text-neon-purple text-sm font-medium">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Card: Certifications */}
          <div className="glass-card p-8 border border-neon-purple/30">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg">
                  <Medal size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert) => {
                  const IconComponent = cert.icon;
                  return (
                    <div 
                      key={cert.id}
                      className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-lg">
                          <IconComponent size={24} className="text-neon-purple" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            {cert.title}
                          </h4>
                          <div className="space-y-2">
                            <p className="text-white/80 text-sm">
                              <span className="text-neon-blue font-medium">Institution:</span> {cert.institution}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 backdrop-blur-sm rounded-full text-xs text-neon-purple border border-neon-purple/30">
                                {cert.credential}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add more section hint */}
              <div className="mt-8 p-4 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-xl border border-neon-purple/20">
                <p className="text-white/60 text-sm text-center">
                  Continuously expanding my knowledge through professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
