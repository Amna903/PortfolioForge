import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Building complete solutions from frontend to backend with modern tech stacks"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Passionate about exploring emerging technologies and pushing boundaries"
  },
  {
    icon: Rocket,
    title: "Performance Driven",
    description: "Creating fast, scalable, and user-centric digital experiences"
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working effectively with teams to deliver exceptional results"
  }
];

export function About() {
  return (
    <section className="py-32 relative overflow-hidden px-6">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-xl text-white/70 mb-6">
                <span className="text-xs font-semibold tracking-widest uppercase">Who I Am</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6">
                Crafting digital solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">passion & precision</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-lg text-white/70 leading-relaxed font-light">
                I'm a versatile full-stack developer with a passion for building innovative digital products. My journey spans across mobile applications, web platforms, Web3 technologies, and AI-powered solutions. Each project is an opportunity to push boundaries and create meaningful impact.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                With experience across diverse tech stacks and platforms, I bring a unique perspective to problem-solving. I believe in writing clean, performant code and creating user experiences that matter. I'm driven by curiosity, continuous learning, and the desire to build products that make a difference.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Whether it's crafting interactive frontends, building robust backends, or exploring cutting-edge technologies like blockchain and AI, I approach every challenge with dedication and a commitment to excellence.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="p-5 rounded-xl bg-white/8 border border-white/15 backdrop-blur-xl">
                <div className="text-2xl font-bold text-primary mb-1">14+</div>
                <div className="text-xs text-white/60 font-medium">Projects</div>
              </div>
              <div className="p-5 rounded-xl bg-white/8 border border-white/15 backdrop-blur-xl">
                <div className="text-2xl font-bold text-secondary mb-1">6</div>
                <div className="text-xs text-white/60 font-medium">Categories</div>
              </div>
              <div className="p-5 rounded-xl bg-white/8 border border-white/15 backdrop-blur-xl">
                <div className="text-2xl font-bold text-accent mb-1">20+</div>
                <div className="text-xs text-white/60 font-medium">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/5 border border-white/15 hover:border-primary/40 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/8 transition-all duration-500 backdrop-blur-xl cursor-default"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/15 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
