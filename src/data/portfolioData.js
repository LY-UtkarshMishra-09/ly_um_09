export const portfolioData = {
  personal: {
    name: "Utkarsh Mishra",
    role: "Full-Stack Developer & AI Agent Architect",
    institution: "Jaypee Institute of Information Technology, Noida",
    batch: "B.Tech CSE • Batch of 2030 (1st Year)",
    location: "Ghaziabad, Uttar Pradesh, India",
    status: "Available for Projects & Collaborations",
    email: "utkarshm.0309@gmail.com", // Customizable by user
    github: "https://github.com/LY-UtkarshMishra-09",
    linkedin: "https://www.linkedin.com/in/lyutkarshmishra09", // Placeholder ready for handle
    twitter: "https://x.com",
    tagline: "Building resilient full-stack systems and next-generation autonomous AI agents.",
    bio: "Computer Science undergraduate at JIIT passionate about turning complex ideas into intuitive, production-grade applications. Specializing in modern web stacks (Next.js, React, TypeScript) and autonomous AI agent architectures.",
    stats: [
      { label: "Current Focus", value: "Full Stack & Agents" },
      { label: "Core Langs", value: "C, C++, Python, JS/TS, HTML/CSS" },
      { label: "Batch", value: "JIIT '30 (1st Year)" },
      { label: "Repositories", value: "Active on GitHub" },
    ]
  },

  focusAreas: [
    {
      title: "Full-Stack Web Development",
      subtitle: "Scalable, High-Performance Applications",
      icon: "Code2",
      description: "Engineering responsive, accessible, and type-safe web applications using Next.js, React, Node.js, and Tailwind CSS. Obsessed with snappy UI interactions and clean component architecture.",
      highlights: ["Next.js App Router & Server Components", "RESTful & Real-time Architectures", "Modern Styling with Tailwind CSS", "State Management & Responsive Design"]
    },
    {
      title: "Autonomous AI Agents",
      subtitle: "Multi-Step Reasoning & Tool Orchestration",
      icon: "Bot",
      description: "Developing intelligent agents that leverage large language models, function calling, vector memory, and deterministic task-planning pipelines to automate real-world workflows.",
      highlights: ["LLM API Integration & Function Calling", "Autonomous Workflow Automation", "Vector Search & Context Retrieval", "Agentic Prompting & Evaluation"]
    },
    {
      title: "Core CS & Algorithmic Thinking",
      subtitle: "Rigorous Engineering Foundation",
      icon: "Cpu",
      description: "Building a rock-solid computer science foundation at JIIT, mastering fundamental data structures, algorithmic optimization, memory management, and clean code principles.",
      highlights: ["Data Structures & Algorithms in C++", "Object-Oriented System Design", "Cybersecurity Basics & Safe Coding", "Version Control & Collaborative Git"]
    }
  ],

  skills: {
    "Languages": [
      { name: "C", level: "Core / Problem Solving", icon: "Code" },
      { name: "C++", level: "Core / Problem Solving", icon: "Code" },
      { name: "Python", level: "AI & Scripting", icon: "Terminal" },
      { name: "TypeScript", level: "Type-Safe Full Stack", icon: "FileCode2" },
      { name: "JavaScript (ES6+)", level: "Web Engineering", icon: "FileCode" },
      { name: "SQL", level: "Relational Queries", icon: "Database" },
      { name: "HTML5 & CSS3", level: "Semantic Web", icon: "Layout" },
    ],
    "Frameworks & Web": [
      { name: "Next.js 15 (App Router)", level: "Full-Stack Framework", icon: "Globe" },
      { name: "React", level: "Component UI", icon: "Layers" },
      { name: "Tailwind CSS", level: "Utility-First Design", icon: "Palette" },
      { name: "Node.js", level: "Runtime & Tooling", icon: "Server" },
      { name: "Express", level: "REST Services", icon: "Network" },
    ],
    "AI & Agents": [
      { name: "LLM API Integrations", level: "Gemini / OpenAI", icon: "Sparkles" },
      { name: "Tool Calling & Function Execution", level: "Agent Capabilities", icon: "Wrench" },
      { name: "Prompt Architecture", level: "Structured Outputs", icon: "MessageSquareCode" },
      { name: "Vector & RAG Concepts", level: "Context Augmentation", icon: "BrainCircuit" },
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", level: "Version Control", icon: "GitBranch" },
      { name: "Linux / Bash", level: "CLI Environments", icon: "TerminalSquare" },
      { name: "VS Code", level: "Primary IDE", icon: "Laptop" },
      { name: "Postman", level: "API Testing", icon: "Send" },
      { name: "Vercel", level: "Cloud Deployments", icon: "Cloud" },
    ]
  },

  projects: [
    {
      id: "teachsync-ai",
      title: "TeachSync_AI",
      category: "AI Agents",
      tagline: "Intelligent AI-Powered Educational Companion & Synchronized Tutoring",
      description: "An AI-orchestrated learning platform featuring contextual tutoring, synchronized study sessions, dynamic Q&A, and interactive concept synthesis for students.",
      tags: ["TypeScript", "Next.js", "AI Agents", "Tailwind CSS", "LLM APIs"],
      github: "https://github.com/LY-UtkarshMishra-09/TeachSync_AI",
      demo: "https://github.com/LY-UtkarshMishra-09/TeachSync_AI",
      featured: true,
      highlights: [
        "Interactive AI tutoring interface with context-aware explanations",
        "Synchronized study flow tailored for conceptual clarity",
        "Modern developer-first UI built with responsive Next.js components"
      ]
    },
    {
      id: "cashsense",
      title: "CashSense",
      category: "Full Stack",
      tagline: "Smart Personal Financial Intelligence & Expense Engine",
      description: "A Python-powered personal finance intelligence and expense analytics engine designed to help users track cash flows, categorize spending, and forecast budgets.",
      tags: ["Python", "Data Processing", "Financial Analytics", "CLI / Web"],
      github: "https://github.com/LY-UtkarshMishra-09/CashSense",
      demo: "https://github.com/LY-UtkarshMishra-09/CashSense",
      featured: true,
      highlights: [
        "Automated spending categorization and budget tracking",
        "Data-driven financial summaries and expense breakdown charts",
        "Engineered for high data privacy and local-first record keeping"
      ]
    },
    {
      id: "cyberdome",
      title: "CyberDome",
      category: "Systems & Security",
      tagline: "Interactive Cybersecurity Learning & Threat Simulation Platform",
      description: "A modular, educational security hub focused on 'Learning Cyber-Security on the go'—offering bite-sized simulations, secure coding practices, and defensive tactics.",
      tags: ["Cybersecurity", "Python", "Network Security", "Linux"],
      github: "https://github.com/LY-UtkarshMishra-09/CyberDome",
      demo: "https://github.com/LY-UtkarshMishra-09/CyberDome",
      featured: true,
      highlights: [
        "Hands-on interactive scenarios for security fundamentals",
        "Network packet inspection concepts and vulnerability walkthroughs",
        "Curated guides on modern encryption, authentication, and web security"
      ]
    },
    {
      id: "agentic-automation-suite",
      title: "Agentic Automation Suite",
      category: "AI Agents",
      tagline: "Multi-Tool AI Agents with Structured Execution & Memory",
      description: "An experimental framework testing autonomous tool calling, recursive task decomposition, and structured schema outputs across heterogeneous APIs.",
      tags: ["TypeScript", "Node.js", "LLM Function Calling", "JSON Schema"],
      github: "https://github.com/LY-UtkarshMishra-09",
      demo: "https://github.com/LY-UtkarshMishra-09",
      featured: false,
      highlights: [
        "Multi-step task delegation with validation checkpoints",
        "Deterministic JSON schema enforcement for zero-hallucination outputs",
        "Extensible plugin interface for integrating external REST tools"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Jaypee Institute of Information Technology (JIIT)",
      location: "Noida, Uttar Pradesh",
      period: "2026 – 2030 (Batch 2030)",
      status: "1st Year / 1st Semester",
      highlights: [
        "Pursuing core computer science curriculum with strong emphasis on systems & programming",
        "Active member of developer and coding communities",
        "Focus on Data Structures, Algorithms, Problem Solving, and Full-Stack Engineering"
      ]
    }
  ]
};

