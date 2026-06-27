import { useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SEGMENT_VH = 70; // scroll distance dedicated to each project's roll

export function Projects3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemCount = projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // 0 -> 1 across the whole tall section, monotonic with scroll direction:
  // rises while scrolling down, falls while scrolling up, clamped at both ends.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Continuous position: integer part = current card, fractional part = flip progress to the next one.
  const continuousIndex = useTransform(scrollYProgress, (p) => p * (itemCount - 1));
  const localT = useTransform(continuousIndex, (c) => c - Math.floor(c));
  const flipAngle = useSpring(useTransform(localT, (t) => -90 * t), {
    stiffness: 220,
    damping: 30,
    mass: 0.4,
  });

  useMotionValueEvent(continuousIndex, "change", (c) => {
    const next = Math.min(itemCount - 1, Math.max(0, Math.floor(c)));
    if (next !== currentIndex) setCurrentIndex(next);
  });

  const nextIndex = Math.min(currentIndex + 1, itemCount - 1);

  return (
    <section id="projects" className="relative px-6 pt-32">
      <div className="max-w-7xl mx-auto mb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
            </h2>
            <p className="text-white/50 text-lg font-light">Scroll through 15 projects in an immersive 3D experience</p>
          </div>
        </motion.div>
      </div>

      {/* Roll-through Carousel */}
      <div ref={sectionRef} style={{ height: `${itemCount * SEGMENT_VH}vh` }} className="relative">
        <div
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ perspective: "1800px" }}
        >
          <div
            className="relative"
            style={{ width: "420px", height: "580px", transformStyle: "preserve-3d" }}
          >
            {/* Next card sits underneath, revealed as the current one flips away */}
            <div className="absolute inset-0">
              <ProjectCard project={projects[nextIndex]} />
            </div>

            {/* Current card flips up and away around its top edge. The opaque
                backer rotates with it so the card's own translucent regions
                never reveal the next card bleeding through underneath. */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden bg-background"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
                backfaceVisibility: "hidden",
                rotateX: flipAngle,
              }}
            >
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </div>

          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-64 h-64 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-40" />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === itemCount - 1 ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-10 flex flex-col items-center justify-center gap-3 text-white/50 font-light"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
