import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "App Dev" },
    { id: "fullstack", label: "Web Dev" },
    { id: "web3", label: "Web3" },
    { id: "ai", label: "AI" },
    { id: "tool", label: "Tools" },
    { id: "game", label: "Games" },
  ];

  const filteredProjects = selectedCategory && selectedCategory !== "all"
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <section id="projects" className="py-32 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">A selection of 15 projects spanning mobile, web3, AI, and more</p>
        </motion.div>

        {/* Category Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id === "all" ? null : category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                (selectedCategory === category.id || (category.id === "all" && !selectedCategory))
                  ? "bg-primary text-black border-primary"
                  : "border-white/20 text-white/70 hover:text-white hover:border-primary/50 bg-white/5"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={`/project/${project.id}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-primary/40 transition-all duration-500" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 z-10" />

                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Top Section */}
                    <div>
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-4 group-hover:bg-white/25 transition-all duration-300 w-fit">
                        <span className="text-xs font-semibold text-white/80 capitalize">{project.category}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/70">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA Arrow */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors duration-300">
                          View Project
                        </span>
                        <motion.div
                          animate={{ 
                            x: hoveredId === project.id ? 4 : 0,
                            y: hoveredId === project.id ? -4 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
