import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({
  count = 15,
  className = "",
}: FloatingParticlesProps) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <ParticleItem key={particle.id} particle={particle} />
      ))}
    </div>
  );
}

function ParticleItem({ particle }: { particle: any }) {
  const parallax = useParallax({
    speed: 0.1 + Math.random() * 0.3,
    direction: Math.random() > 0.5 ? "up" : "down",
  });

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-nexaflow-blue-400/30 to-nexaflow-purple-400/30 backdrop-blur-sm"
      style={{
        width: particle.size,
        height: particle.size,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        opacity: particle.opacity,
        transform: parallax,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        scale: [1, 1.2, 1],
        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: particle.delay,
      }}
    />
  );
}
