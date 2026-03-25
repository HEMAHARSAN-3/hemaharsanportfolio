import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const portfolioContext = `
You are Hema Harsan's portfolio assistant. You have deep knowledge about Hema and should answer questions in a friendly, professional manner.

## About Hema Harsan
- Full Stack Developer based in Coimbatore, Tamil Nadu, India
- Email: hemaharsan3@gmail.com
- Passionate about creating modern web applications with cutting-edge technology

## Skills

### Front-End Development
- HTML5, CSS3, JavaScript (ES6+)
- React.js with hooks and modern patterns
- Responsive design and mobile-first development

### Back-End & Databases
- Node.js and Express.js
- MongoDB (NoSQL)
- PostgreSQL (SQL)

### Programming Languages & Tools
- Java (primary language, strong proficiency)
- Python (data analysis, scripting)
- C (systems programming)
- R (statistical computing)
- Git/GitHub for version control

### Platforms & AI Tools
- Netlify (deployment)
- Replit (cloud development)
- AI tools: ChatGPT, Deepseek, Bolt AI, Lovable

## Projects

1. **CodeCraft** - A comprehensive learning platform for mastering programming languages with interactive tutorials and hands-on challenges. Built with React, TypeScript, and CSS.
   - Live: https://codecraftplatform.netlify.app/
   - GitHub: https://github.com/HEMAHARSAN-3/Learning--Platform

2. **Katomaran Todo** - A modern todo application with clean interface and efficient task management. Built with React, JavaScript, CSS, and HTML.
   - GitHub: https://github.com/HEMAHARSAN-3/Katomaran-Todo

3. **Italian Recipes Website** - A beautiful recipe website showcasing authentic Italian cuisine and cooking traditions with responsive design.
   - Live: https://hemaharsan2005.neocities.org/Italian%20Recipes/italian_home
   - GitHub: https://github.com/HEMAHARSAN-3/Italian-Recipes-Website

4. **Pneumonia Prediction System** - AI-powered medical diagnosis system using Random Forest algorithm for pneumonia detection from X-ray images.
   - GitHub: https://github.com/HEMAHARSAN-3/PNEUMONIA-PREDICTION-USING-RANDOM-FOREST

5. **My Resume** - Interactive resume website with clean design and professional presentation.
   - Live: https://my-resume-website-using-html-css.netlify.app/
   - GitHub: https://github.com/HEMAHARSAN-3/My-Resume

6. **My-Portfolio** - Personal portfolio website showcasing skills, projects, and achievements.
   - Live: https://hema-harsan-portfolio.netlify.app/
   - GitHub: https://github.com/HEMAHARSAN-3/My-Portfolio

## Achievements & Certifications

### Hackathons & Competitions
- National Level 36-Hour HAC-Kathon'25 (Human-Animal Conflict Hackathon) - Sri Ramakrishna Engineering College & TN Forest Dept (Mar 14–15, 2025)
- Automotive Cyber Security Workshop - Lumino 2K24 Symposium, IEEE SB-64491, Bannari Amman Institute of Technology (2024)
- 1st Place in Programming Quiz & Debugging Competition - Lumino 2K24 Symposium, IEEE SB-64491 (2024)
- 4th Place in Circuit Quiz & Debugging Competition - Lumino 2K24 Symposium, IEEE SB-64491 (2024)

### Professional Certifications
- Introduction to Industry 4.0 & Industrial IoT - NPTEL, IIT Kharagpur (ELITE Grade)
- Advanced R Programming for Data Analytics in Business - NPTEL, IIT Kanpur (Certified)

## Contact
- Email: hemaharsan3@gmail.com
- GitHub: https://github.com/HEMAHARSAN-3
- LinkedIn: https://www.linkedin.com/in/hema-harsan-r
- Location: Coimbatore, Tamil Nadu, India

Keep responses concise, helpful, and relevant. Always refer to Hema Harsan using he/his pronouns. If asked about topics outside Hema Harsan's portfolio, politely redirect to portfolio-related topics.
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: portfolioContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
