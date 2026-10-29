// ============================================================
// data.js — Portfolio content data for Surya Kesavadasupalem
// Edit this file to update content without touching HTML/CSS
// ============================================================

window.portfolioData = {
  personal: {
    name: "Surya Kesavadasupalem",
    shortName: "Surya K.",
    initials: "SK",
    role: "AI Student & Developer",
    email: "suryakesavadasupalem03@gmail.com",
    phone: "+91 8790936316",
    github: "https://github.com/Surya318",
    linkedin: "https://www.linkedin.com/in/surya-kesavadasupalem-76a736378/",
    location: "Konaseema, Andhra Pradesh, India",
    languages: ["English", "Telugu"],
    available: true
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Building practical AI solutions with Python, full-stack development, and RAG-based chatbots. Passionate about turning complex AI concepts into real-world applications.",
    typingRoles: [
      "AI Student",
      "Python Developer",
      "Full-Stack Developer",
      "RAG Chatbot Builder"
    ],
    ctaButtons: [
      { label: "Download Resume", href: "assets/resume.pdf", type: "outline", download: true },
      { label: "Contact Me", href: "#contact", type: "ghost" }
    ]
  },

  about: {
    paragraphs: [
      "I'm a B.Tech Artificial Intelligence student at Kakinada Institution of Engineering and Technology (2024–2028), passionate about building AI-powered solutions that solve real problems.",
      "My core strengths lie in Python development, building RESTful APIs with FastAPI and Flask, and implementing RAG-based chatbot systems using LangChain and LLM APIs. I enjoy bridging the gap between AI models and practical web applications.",
      "Currently open to AI/ML and full-stack internship opportunities where I can contribute meaningfully while continuing to grow as a developer."
    ],
    quickFacts: [
      { icon: "📍", label: "Location", value: "Konaseema, Andhra Pradesh" },
      { icon: "🎓", label: "Degree", value: "B.Tech AI, 2024–2028" },
      { icon: "🌐", label: "Languages", value: "English, Telugu" },
      { icon: "📧", label: "Email", value: "suryakesavadasupalem03@gmail.com" }
    ]
  },

  skills: [
    {
      category: "Programming",
      icon: "💻",
      items: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" }
      ]
    },
    {
      category: "Web Development",
      icon: "🌐",
      items: [
        { name: "HTML5", icon: "📄" },
        { name: "CSS3", icon: "🎨" },
        { name: "React.js", icon: "⚛️" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "🔧",
      items: [
        { name: "FastAPI", icon: "🚀" },
        { name: "Flask", icon: "🌶️" },
        { name: "LangChain", icon: "🔗" }
      ]
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: [
        { name: "SQL", icon: "📊" },
        { name: "MongoDB", icon: "🍃" }
      ]
    },
    {
      category: "AI / ML",
      icon: "🤖",
      items: [
        { name: "Machine Learning", icon: "🧠" },
        { name: "RAG Systems", icon: "📚" },
        { name: "Chatbot Dev", icon: "💬" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      items: [
        { name: "Git", icon: "🌿" },
        { name: "GitHub", icon: "🐙" }
      ]
    }
  ],

  projects: [
    {
      title: "Legal Simplifier",
      description: "RAG-based chatbot that retrieves relevant sections from legal documents and explains them in simple, plain language. Flask REST APIs connect the LangChain pipeline to a React.js chat interface, making legal content accessible to everyone.",
      tech: ["Python", "Flask", "React.js", "MongoDB", "LangChain", "LLM APIs"],
      github: "#github-legal",
      demo: "#demo-legal",
      icon: "⚖️",
      featured: true
    },
    {
      title: "BudgetBuddy",
      description: "REST API with JWT authentication for managing daily expenses with category and date filters, plus a monthly summary endpoint showing total spending per category. Fully documented with Swagger UI for easy integration.",
      tech: ["Python", "FastAPI", "SQL", "JWT", "Swagger UI"],
      github: "#github-budget",
      demo: "#demo-budget",
      icon: "💰",
      featured: true
    }
  ],

  experience: [
    {
      role: "AI Intern",
      company: "Rinex",
      duration: "07 Sep 2024 – 30 Oct 2024",
      badge: "2 months",
      type: "Internship",
      bullets: [
        "Completed a 2-month AI internship covering machine learning fundamentals and how AI models work.",
        "Wrote Python programs for AI applications, practicing data handling and model-based tasks.",
        "Learned to integrate AI models into small projects, bridging theory and practical implementation."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence",
      institution: "Kakinada Institution of Engineering and Technology",
      location: "Korangi, Kakinada",
      period: "2024 – 2028",
      score: "CGPA: 7.45",
      icon: "🎓",
      current: true
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Montessori Junior College",
      location: "Palakollu",
      period: "2022 – 2024",
      score: "67.5%",
      icon: "📚",
      current: false
    },
    {
      degree: "10th Grade (SSC)",
      institution: "S P V N M Z P High School",
      location: "Antervedikara",
      period: "2021 – 2022",
      score: "63.3%",
      icon: "🏫",
      current: false
    }
  ],

  contact: {
    heading: "Let's Work Together",
    message: "I'm actively looking for AI/ML and full-stack internship opportunities. Whether you have a project in mind or just want to chat about tech, my inbox is always open!",
    formspreeId: "YOUR_FORM_ID"
  }
};
