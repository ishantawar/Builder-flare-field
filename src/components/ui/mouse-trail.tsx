import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);

      const newPoint: TrailPoint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrail([]);
    };

    const cleanup = () => {
      const now = Date.now();
      setTrail((prev) => prev.filter((point) => now - point.timestamp < 1000));
    };

    const animate = () => {
      cleanup();
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute w-2 h-2 bg-nexaflow-electric/60 rounded-full"
            style={{
              left: point.x - 4,
              top: point.y - 4,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
