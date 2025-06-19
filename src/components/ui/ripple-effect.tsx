import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function RippleEffect({
  children,
  className = "",
  color = "rgba(255, 255, 255, 0.6)",
  duration = 0.6,
}: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id),
        );
      }, duration * 1000);
    },
    [duration],
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
    >
      {children}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              backgroundColor: color,
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
