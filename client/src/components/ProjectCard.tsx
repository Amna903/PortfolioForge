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
      <div className="flex justify-between items-center p-6 md:p-8">
        <Badge variant="outline" className="rounded-full px-4 py-1.5 border-white/15 bg-white/8 text-xs font-semibold text-white/80 backdrop-blur-xl capitalize">
          {project.category}
        </Badge>

        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary text-black flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
          {project.link ? <ArrowUpRight size={22} /> : <PlayCircle size={22} />}
        </div>
      </div>

      {/* Middle Image Area */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-8 group-hover:scale-110 transition-transform duration-700 ease-out">
        <div className={cn(
          "w-40 h-40 rounded-full blur-3xl opacity-50",
          project.id % 3 === 0 ? "bg-primary" :
          project.id % 3 === 1 ? "bg-secondary" : "bg-accent"
        )} />
        <h1 className="absolute text-7xl md:text-8xl font-black text-white/8 select-none pointer-events-none font-heading">
          {String(project.id).padStart(2, '0')}
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="p-6 md:p-8 bg-gradient-to-t from-black/90 to-black/40 mt-auto backdrop-blur-sm">
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/60 line-clamp-2 text-sm md:text-base leading-relaxed mb-5 font-light">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] md:text-xs font-medium text-black bg-white/85 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
             <span className="text-[10px] md:text-xs font-medium text-white/70 bg-white/15 px-3 py-1 rounded-full border border-white/20">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const containerClasses = "group relative w-[85vw] md:w-[420px] h-[580px] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/60 border border-white/15 hover:border-primary/40 transition-all duration-500 block shadow-xl hover:shadow-2xl hover:shadow-primary/10";

  return (
    <Link href={`/project/${project.id}`}>
      <div className={containerClasses}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-0" />
        <CardContent />
      </div>
    </Link>
  );
}
