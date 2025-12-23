import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
      </main>
      
      <footer id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-black pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">amazing.</span></h2>
              <p className="text-xl text-muted-foreground max-w-md">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 items-start md:items-end">
  {/* Email link remains the same */}
  <a href="mailto:aseaamk75@gmail.com" className="group flex items-center gap-4 text-2xl font-bold hover:text-primary transition-colors">
    <Mail className="group-hover:scale-110 transition-transform" />
    aseaamk75@gmail.com
    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/amna-atiq-58220529a/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-2xl font-bold hover:text-[#0077b5] transition-colors">
    <Linkedin className="group-hover:scale-110 transition-transform" />
    LinkedIn
    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>

  {/* GitHub */}
  <a href="https://github.com/Amna903" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-2xl font-bold hover:text-white transition-colors">
    <Github className="group-hover:scale-110 transition-transform" />
    GitHub
    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
</div>

          </div>
          
          <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-muted-foreground font-mono">
            <p>© 2025 MyPortfolio</p>
            <p>Designed & Built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
