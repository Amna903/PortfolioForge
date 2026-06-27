import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Availability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-20 right-6 z-40 md:right-8"
    >
      <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 backdrop-blur-xl shadow-lg">
        <div className="relative">
          <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-xs font-semibold text-green-300">Available for Projects</span>
      </div>
    </motion.div>
  );
}
