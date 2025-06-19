import { useEffect, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = "up", offset = 0 } = options;
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const parallaxValue = (scrollY + offset) * speed;

      let transformValue = "";
      switch (direction) {
        case "up":
          transformValue = `translate3d(0, ${-parallaxValue}px, 0)`;
          break;
        case "down":
          transformValue = `translate3d(0, ${parallaxValue}px, 0)`;
          break;
        case "left":
          transformValue = `translate3d(${-parallaxValue}px, 0, 0)`;
          break;
        case "right":
          transformValue = `translate3d(${parallaxValue}px, 0, 0)`;
          break;
      }

      setTransform(transformValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, offset]);

  return transform;
}

export function useParallaxValue(speed: number = 0.5, offset: number = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setValue((scrollY + offset) * speed);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, offset]);

  return value;
}
