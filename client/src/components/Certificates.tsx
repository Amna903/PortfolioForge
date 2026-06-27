import { motion } from "framer-motion";
import { Download, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  title: string;
  file: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    title: "ACM Scavenger Hunt",
    file: "ACM Scavenger Hunt certificate.pdf",
    description: "Recognition for participation and excellence in competitive programming challenge"
  },
  {
    title: "Professional Certificate",
    file: "Amna-Atiq-certificate.pdf",
    description: "Certificate of professional development and technical expertise"
  },
  {
    title: "Appreciation Certificate",
    file: "Amna-Atiq-appreciation-certificate.pdf",
    description: "Recognition for outstanding contributions and dedication"
  },
  {
    title: "Atiq Professional Award",
    file: "Amna Atiq.pdf",
    description: "Industry recognition for outstanding technical contributions and innovation"
  },
  {
    title: "PPSD Certification",
    file: "Amna Atiq PPSD.pdf",
    description: "Professional certification in advanced development practices and problem-solving"
  },
  {
    title: "Team Problem Solving",
    file: "Team Amza (Anza tamveel & Amna Atiq) Problem Solving Basic.pdf",
    description: "Team recognition for collaborative problem-solving and technical excellence"
  }
];

export function Certificates() {
  return (
    <section className="py-32 relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-xl text-white/70 mb-6">
            <Award size={14} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">Achievements</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Awards</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">Recognition and credentials from competitions, professional development, and industry contributions</p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/5 border border-white/15 hover:border-primary/40 transition-all duration-500 backdrop-blur-xl hover:bg-gradient-to-br hover:from-white/12 hover:to-white/8 shadow-lg hover:shadow-xl hover:shadow-primary/10">
                
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/15 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/60 text-sm leading-relaxed font-light mb-8 flex-grow">
                    {cert.description}
                  </p>
                  
                  {/* Download Button */}
                  <a href={`/${cert.file}`} download className="w-full">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90 font-semibold transition-all duration-300 rounded-lg">
                      <Download size={16} className="mr-2" />
                      Download Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
