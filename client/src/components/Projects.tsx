import { useRef } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="px-6 mb-10 flex items-end justify-between max-w-[1800px] mx-auto">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-2">
            Selected <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Swipe to explore</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-white/50">
          <span>Scroll</span> <ArrowRight className="animate-pulse" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto pb-20 px-6 snap-x snap-mandatory no-scrollbar items-stretch"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 first:pl-4 md:first:pl-20 last:pr-4 md:last:pr-20"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        
        {/* End Spacer */}
        <div className="shrink-0 w-1 md:w-20" />
      </div>
    </section>
  );
}
