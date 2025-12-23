import { useRoute, Link } from "wouter";
import { projects } from "@/lib/projects";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";

export default function ProjectDetails() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params ? parseInt(params.id) : 0;
  const project = projects.find(p => p.id === projectId);

  if (!match || !project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8 hover:bg-white/5 text-muted-foreground hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">{project.title}</h1>
                <p className="text-xl text-secondary font-bold mb-6">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-white/50 uppercase tracking-wider mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div>
                    <h3 className="text-sm font-mono text-white/50 uppercase tracking-wider mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-secondary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
  {project.github ? (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
      <Button className="flex-1 bg-white text-black hover:bg-white/90">
        <Github className="mr-2 h-4 w-4" /> Source Code
      </Button>
    </a>
  ) : (
    <Button className="flex-1 bg-white/30 text-black/50 cursor-not-allowed">
      <Github className="mr-2 h-4 w-4" /> Source Code
    </Button>
  )}
</div>

            </div>

 
            {/* Right Column - Video Player */}
<div className="lg:col-span-2">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="aspect-video rounded-3xl overflow-hidden bg-black/40 border border-white/10 relative group shadow-2xl"
  >
    {project.video && project.video !== "placeholder" ? (
      <video
        src={`/${project.video}`}   // dynamically uses the project's video
        controls
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <p className="text-white/80 font-medium tracking-wide">Video not available</p>
      </div>
    )}
  </motion.div>
</div>

          </div>
        </div>
      </main>
    </div>
  );
}
