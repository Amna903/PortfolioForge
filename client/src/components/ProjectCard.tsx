import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = () => (
    <div className="h-full flex flex-col relative z-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-8">
        <Badge variant="outline" className="rounded-full px-4 py-2 border-white/10 bg-black/20 text-sm font-medium text-white backdrop-blur-md">
          {project.category}
        </Badge>
        
        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
          {project.link ? <ArrowUpRight size={24} /> : <PlayCircle size={24} />}
        </div>
      </div>

      {/* Middle Image Area (Placeholder) */}
      <div className="flex-1 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700 ease-out">
        {/* Generative geometric placeholder based on project ID */}
        <div className={cn(
          "w-48 h-48 rounded-full blur-3xl opacity-40 animate-pulse",
          project.id % 3 === 0 ? "bg-primary" : 
          project.id % 3 === 1 ? "bg-secondary" : "bg-accent"
        )} />
        <h1 className="absolute text-8xl md:text-9xl font-bold text-white/5 select-none pointer-events-none font-heading">
          0{project.id}
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="p-8 bg-gradient-to-t from-black/80 to-transparent mt-auto">
        <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/70 line-clamp-2 text-lg leading-relaxed mb-6">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-xs font-mono font-bold text-black bg-white/80 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
             <span className="text-xs font-mono text-white bg-white/10 px-3 py-1.5 rounded-full">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const containerClasses = "group relative w-[85vw] md:w-[450px] h-[600px] rounded-[2.5rem] overflow-hidden bg-card border border-white/10 hover:border-primary/50 transition-colors duration-500 block shadow-2xl hover:shadow-primary/20";

  // External Link for Riskify
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-0" />
        <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />
        <CardContent />
      </a>
    );
  }

  // Internal Link for others
  return (
    <Link href={`/project/${project.id}`}>
      <div className={containerClasses}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-0" />
        <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />
        <CardContent />
      </div>
    </Link>
  );
}
