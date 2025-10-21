import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Hema Harsan's portfolio assistant. Ask me anything about his skills, projects, or experience!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioData = {
    name: "Hema Harsan",
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "React"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "MySQL"],
      programming: ["Java", "C", "Python", "R"],
      design: ["Figma", "Adobe XD"]
    },
    projects: [
      {
        name: "E-commerce Platform",
        tech: "React, Node.js, MongoDB",
        description: "Full-stack e-commerce solution with user authentication and payment integration"
      },
      {
        name: "Task Management App",
        tech: "React, Express, MySQL",
        description: "Collaborative task management application with real-time updates"
      },
      {
        name: "Weather Dashboard",
        tech: "HTML, CSS, JavaScript, Weather API",
        description: "Interactive weather dashboard with location-based forecasts"
      },
      {
        name: "Blog Platform",
        tech: "React, Node.js, MongoDB",
        description: "Full-featured blogging platform with rich text editor and user management"
      },
      {
        name: "My-Portfolio",
        tech: "HTML, CSS, JavaScript",
        description: "Personal portfolio website built to highlight professional skills, projects, and achievements"
      }
    ],
    contact: {
      email: "hemaharsan@example.com",
      location: "Available for remote opportunities"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return `Hema has expertise in multiple areas:
      
Frontend: ${portfolioData.skills.frontend.join(', ')}
Backend: ${portfolioData.skills.backend.join(', ')}
Database: ${portfolioData.skills.database.join(', ')}
Programming Languages: ${portfolioData.skills.programming.join(', ')}
Design Tools: ${portfolioData.skills.design.join(', ')}`;
    }

    if (message.includes('project')) {
      const projectList = portfolioData.projects.map((project, index) => 
        `${index + 1}. **${project.name}** - ${project.description} (Built with: ${project.tech})`
      ).join('\n\n');
      
      return `Here are Hema's key projects:\n\n${projectList}`;
    }

    if (message.includes('experience') || message.includes('background')) {
      return `Hema Harsan is a passionate full-stack developer with experience in modern web technologies. He has built multiple projects ranging from e-commerce platforms to task management applications, demonstrating proficiency in both frontend and backend development.`;
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return `You can reach out to Hema for opportunities or collaborations. He's available for remote work and always interested in exciting projects. Check out his portfolio for more details!`;
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `Hello! I'm here to help you learn more about Hema Harsan. You can ask me about his skills, projects, experience, or how to contact him. What would you like to know?`;
    }

    if (message.includes('education') || message.includes('qualification')) {
      return `Hema has a strong educational background in computer science and has continuously updated his skills with modern web development technologies and frameworks.`;
    }

    return `That's a great question! I can help you learn about Hema's skills, projects, experience, or contact information. Feel free to ask about any specific technology or project you're interested in!`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg cyber-btn"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40 animate-scale-in">
          <div className="glass-card h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-gradient">Portfolio Assistant</h3>
              <p className="text-sm text-white/60">Ask me about Hema Harsan</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                        : 'bg-white/10 text-white backdrop-blur-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 cyber-input text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="cyber-btn px-3 py-2"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
