import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-nexaflow-blue-400/20 to-nexaflow-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-l from-nexaflow-electric/15 to-nexaflow-blue-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-t from-nexaflow-purple-400/10 to-nexaflow-electric/10 rounded-full blur-2xl"
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 10,
        }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 dark:opacity-20" />
    </div>
  );
}
