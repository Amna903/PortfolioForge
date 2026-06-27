import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Kotlin", "Android", "Ionic", "React Native"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Firebase", "PostgreSQL", "MongoDB", "REST APIs", "Moodle"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Web3 & Blockchain",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Decentralized Apps", "Crypto Transfers"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "AI & ML",
    skills: ["GPT-4", "AI Chatbots", "Machine Learning", "Prompt Engineering", "NLP"],
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    category: "Tools & DevOps",
    skills: ["Python", "Java", "Git", "AWS", "CI/CD", "Docker", "Linux"],
    color: "from-gray-500 to-slate-500"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-xl text-white/70 mb-6">
            <Zap size={14} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technologies</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">Proficient across multiple tech stacks and domains, ready to tackle complex challenges</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/5 border border-white/15 hover:border-primary/40 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.category}
                  </h3>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.08 + skillIndex * 0.03 }}
                        viewport={{ once: true }}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white/80 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
