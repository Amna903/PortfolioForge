import { motion } from "framer-motion";
import avatarImage from "@assets/generated_images/a_cute_3d_avatar_of_a_developer_in_a_dark_theme_setting.png";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary mb-8"
          >
            <Sparkles size={16} />
            <span className="text-sm font-bold tracking-wider uppercase">Available for hire</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold font-heading leading-[0.9] tracking-tight mb-8 text-white">
            Creative<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Developer.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences. 
            Specializing in <span className="text-white font-bold">Mobile</span>, <span className="text-white font-bold">Web3</span>, and <span className="text-white font-bold">AI</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              View Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 rounded-full border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold text-lg backdrop-blur-sm transition-all"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-[500px] h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-20 pointer-events-none"></div>
             <img 
              src={avatarImage} 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative floating cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl z-20"
          >
            <div className="text-3xl font-bold text-white mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl z-20"
          >
            <div className="flex -space-x-2 mb-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
               ))}
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
