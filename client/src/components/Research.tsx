import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResearchPaper {
  title: string;
  description: string;
  topic: string;
  link: string;
  date?: string;
}

const papers: ResearchPaper[] = [
  {
    title: "American Sign Language Recognition Using Mediapipe and Deep Learning",
    description: "A Real-Time Approach to ASL Recognition combining computer vision and deep learning techniques for real-time sign language detection and translation",
    topic: "AI & Computer Vision",
    link: "https://osf.io/rdnyz",
    date: "2026"
  },
  {
    title: "Automated Code Formatting Framework Using Hybrid N-gram and LSTM Models",
    description: "An intelligent code formatting system leveraging hybrid N-gram and LSTM models to automatically format and optimize code across multiple programming languages",
    topic: "Machine Learning & NLP",
    link: "https://osf.io/tvefr/overview",
    date: "2026"
  },
  {
    title: "The Death of Boredom: What Society Loses When People Are Never Left Alone with Their Thoughts",
    description: "An exploration of the societal implications of constant digital engagement and the loss of unstructured thinking time, examining how continuous connectivity affects mental health and creative thinking",
    topic: "Psychology & Digital Society",
    link: "https://osf.io/2cesy/overview",
    date: "2026"
  },
  {
    title: "Parallelizing SIR Epidemic Spread Simulation Using Pthreads, OpenMP, and MPI",
    description: "A comparative study of parallel computing approaches for epidemic modeling, implementing SIR simulations using multiple parallelization techniques to optimize performance and scalability",
    topic: "High Performance Computing",
    link: "https://osf.io/wq9t4/overview",
    date: "2026"
  }
];

export function Research() {
  return (
    <section id="research" className="py-32 relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-xl text-white/70 mb-6">
            <BookOpen size={14} className="text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase">Published Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Publications</span>
          </h2>
          <p className="text-white/50 text-lg font-light max-w-2xl">Exploring cutting-edge technologies and contributing to the AI and computer vision community</p>
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/5 border border-white/15 hover:border-primary/40 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      {/* Topic Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-4">
                        <span className="text-xs font-semibold text-primary">{paper.topic}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {paper.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-base leading-relaxed mb-4 font-light max-w-3xl">
                        {paper.description}
                      </p>

                      {/* Meta */}
                      {paper.date && (
                        <div className="text-sm text-white/40 font-medium">
                          Published {paper.date}
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        <Button className="h-13 px-6 bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90 font-semibold transition-all duration-300 rounded-lg whitespace-nowrap flex items-center gap-2">
                          Read Paper
                          <ExternalLink size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
