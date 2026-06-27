import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40 group-hover:opacity-60" />
          
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-primary/40 transition-all duration-500" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mx-auto"
            >
              <Zap size={16} className="text-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Let's Create Something Great</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight"
            >
              Ready to bring your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">vision to life?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Let's collaborate on your next project. Whether you need a full-stack solution, mobile app, Web3 integration, or AI-powered feature, I'm here to help turn ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="h-14 px-10 bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90 transition-all duration-300 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="h-14 px-10 border-white/30 bg-white/5 hover:bg-white/15 hover:border-white/50 text-white font-bold text-lg rounded-lg backdrop-blur-xl transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">14+</div>
                <div className="text-xs text-white/50 font-medium">Projects Delivered</div>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                <div className="text-xs text-white/50 font-medium">Client Satisfaction</div>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">6+</div>
                <div className="text-xs text-white/50 font-medium">Tech Domains</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
