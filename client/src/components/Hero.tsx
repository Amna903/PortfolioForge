import { motion } from "framer-motion";
import avatarImage from "@assets/generated_images/a_cute_3d_avatar_of_a_developer_in_a_dark_theme_setting.png";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden pt-20">
      {/* Refined Background with Subtle Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-[150px] mix-blend-multiply opacity-40" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] mix-blend-multiply opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-xl text-white/70"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">Fullstack Developer & Innovation</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[5.5rem] font-bold font-heading leading-[0.95] tracking-tight mb-6 text-white">
              Crafting<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent font-black">Digital<br/>Excellence</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light"
          >
            Building sophisticated digital experiences across <span className="text-white font-semibold">Mobile</span>, <span className="text-white font-semibold">Web3</span>, and <span className="text-white font-semibold">AI</span>. Each project crafted with precision, performance, and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="h-13 px-8 rounded-lg bg-white text-black hover:bg-white/95 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-semibold text-base backdrop-blur-xl transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-[480px] h-[480px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl hover:shadow-[0_0_60px_rgba(200,50,200,0.3)] transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 mix-blend-overlay z-20 pointer-events-none"></div>
             <img
              src={avatarImage}
              alt="Portfolio Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stat Cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-black/40 backdrop-blur-2xl border border-white/20 p-5 rounded-xl shadow-2xl z-20"
          >
            <div className="text-2xl font-bold text-white mb-1">14+</div>
            <div className="text-xs text-white/60 font-medium">Projects Delivered</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-2xl border border-white/20 p-5 rounded-xl shadow-2xl z-20"
          >
            <div className="text-xs text-white/60 font-medium mb-2">Tech Stack</div>
            <div className="flex gap-1.5">
               {['React', 'Web3', 'AI'].map((tech, i) => (
                 <span key={i} className="text-[10px] bg-white/15 text-white/80 px-2 py-1 rounded-full border border-white/20">{tech}</span>
               ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
