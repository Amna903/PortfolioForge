import { type Project } from "@/lib/types";

export const projects: Project[] = [
    {
    id: 7,
    title: "Edumeup",
    subtitle: "Learning Platform",
    tech: ["React", "Next.js", "PostgreSQL", "Moodle"],
    type: "Full-Stack",
    description: "Learning platform where students, teachers, and schools can buy and enroll in courses. Integrated with Moodle backend for comprehensive course management and learning experience.",
    link: "https://eduzipzip.vercel.app",
    github: "https://github.com/Amna903/edu.git",
    category: "fullstack",
    size: "wide"
  },
    {
    id: 11,
    title: "DLLM",
    subtitle: "Restaurant Management",
    tech: ["React", "Node.js", "Firebase"],
    type: "Full-Stack",
    description: "Restaurant app with dual-side management. Admin portal for restaurant operations and client-facing ordering system.",
    link: "https://dllm.co.ao",
    category: "fullstack",
    size: "wide",
    github: "https://github.com/Amna903/crousal.git"
  },
    {
    id: 10,
    title: "Arwa Portfolio",
    subtitle: "Multilingual Site",
    tech: ["Java", "HTML/CSS"],
    type: "Web",
    description: "Form-based website collecting info in Urdu & Arabic.",
    link: "https://arwa-web-seven.vercel.app",
    category: "web",
    size: "large",
    video: "videos/arwa.mp4",
    github: "https://github.com/AnzaTamveel/ArwaPortfolio"
  },
  {
    id: 1,
    title: "Active Pulse",
    subtitle: "Fitness & Activity Tracking",
    tech: ["Flutter", "Dart"],
    type: "Mobile App",
    description: "Designed for West Midlands residents, including beginners and users with disabilities. Helps users stay active, track workouts, and join community challenges.",
    category: "mobile",
    size: "large",
    video: "videos/activeplus.mp4"

  },

  {
    id: 2,
    title: "Remittance DApp",
    subtitle: "Crypto Transfers",
    tech: ["Ionic", "React", "Solidity"],
    type: "Web3",
    description: "Decentralized app enabling secure international transfers using ETH with smart contracts.",
    category: "web3",
    size: "normal",
    video: "videos/r.mp4"
  },
  {
    id: 4,
    title: "Relationship AI",
    subtitle: "AI Coach & Journal",
    tech: ["GPT-4", "Firebase"],
    type: "AI App",
    description: "Personalized relationship coaching chat with emotional tone analysis and daily affirmations.",
    category: "ai",
    size: "tall",
    video: "videos/app.mov"
  },
  {
    id: 3,
    title: "Pocket Store",
    subtitle: "Loan Management",
    tech: ["Ionic", "Angular"],
    type: "Mobile App",
    description: "Helps businesses manage borrowed items and loan tracking with real-time notifications.",
    category: "mobile",
    size: "normal",
    video: "videos/0720.mov"
  },
  {
    id: 5,
    title: "Doorlink TM",
    subtitle: "Access Platform",
    tech: ["Ionic", "Firebase"],
    type: "Platform",
    description: "QR-based property access and lead management connecting homeowners with businesses.",
    category: "mobile",
    size: "wide",
    video: "videos/door.mp4"
  },
  {
    id: 12,
    title: "WIZ Game",
    subtitle: "Maze Strategy",
    tech: ["Java", "Custom Engine"],
    type: "Game",
    description: "Strategy game with enemy projectile logic and tile-based navigation.",
    category: "game",
    size: "normal",
    video: "videos/maze.mp4"
  },

  {
    id: 8,
    title: "Review Bot",
    subtitle: "Auto Poster",
    tech: ["Python"],
    type: "Bot",
    description: "AI bot to automate review posting on Google Maps.",
    category: "tool",
    size: "normal",
    video: "videos/bot.mov",
    github:"https://github.com/Amna903/bot"
  },
    {
    id: 6,
    title: "Riskify.ai",
    subtitle: "AI SWMS Generator",
    tech: ["Full-Stack", "AWS", "DevOps"],
    type: "SaaS",
    description: "AI-powered platform to generate safety & method statements. Live production app with full CI/CD pipeline.",
    link: "https://app.riskifysafety.com",
    category: "fullstack",
    size: "wide",
    github: "https://github.com/michaeldew01-creator/riskify.git"
  },
  {
    id: 9,
    title: "Code Formatter",
    subtitle: "AST Parser",
    tech: ["Python"],
    type: "Utility",
    description: "Formats Java & Python code using AST parsing.",
    category: "tool",
    size: "normal",
    video: "videos/format.mov",
    github:"https://github.com/Amna903/Formatter"
  }
];
