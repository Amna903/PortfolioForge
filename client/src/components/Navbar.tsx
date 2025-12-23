import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-heading font-bold text-2xl text-primary cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MyPortfolio
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('projects')} className="text-sm font-bold hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-bold hover:text-primary transition-colors">Contact</button>
          <div className="w-px h-4 bg-white/10 mx-2"></div>
          <div className="flex gap-4">
            <a href="https://github.com/Amna903" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/amna-atiq-58220529a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-card border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          <button onClick={() => scrollTo('projects')} className="text-lg font-bold text-left">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-lg font-bold text-left">Contact</button>
          <div className="flex gap-6 pt-4 border-t border-white/10">
            <a href="https://github.com/Amna903" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/amna-atiq-58220529a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white"><Linkedin size={24} /></a>
            <a href="mailto:aseaamk75@gmail.com" className="text-muted-foreground hover:text-white"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
