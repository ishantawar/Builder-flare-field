import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { useParallax, useParallaxValue } from "@/hooks/use-parallax";
import { ChevronDown, Play, Sparkles, ArrowRight } from "lucide-react";

const typingTexts = [
  "Workflow Automation",
  "AI-Powered Solutions",
  "Seamless Integration",
  "Future of Work",
];

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax effects
  const parallax1 = useParallax({ speed: 0.3, direction: "up" });
  const parallax2 = useParallax({ speed: 0.5, direction: "down" });
  const parallax3 = useParallax({ speed: 0.2, direction: "left" });
  const parallax4 = useParallax({ speed: 0.4, direction: "right" });
  const parallaxValue = useParallaxValue(0.1);

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 particles">
        <div className="absolute inset-0 bg-gradient-to-br from-nexaflow-blue-50 via-white to-nexaflow-purple-50 dark:from-nexaflow-dark dark:via-nexaflow-blue-900/20 dark:to-nexaflow-purple-900/20" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating Particles */}
        <FloatingParticles count={20} />

        {/* Floating Elements with Parallax */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-nexaflow-blue-400/20 rounded-full blur-xl float-1"
          style={{ transform: parallax1 }}
        />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-nexaflow-purple-400/20 rounded-full blur-xl float-2"
          style={{ transform: parallax2 }}
        />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-nexaflow-electric/20 rounded-full blur-xl float-3"
          style={{ transform: parallax3 }}
        />
        <div
          className="absolute bottom-40 right-10 w-16 h-16 bg-nexaflow-purple-400/20 rounded-full blur-xl float-1"
          style={{ transform: parallax4 }}
        />
      </div>

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-nexaflow-blue-600 via-nexaflow-purple-600 to-nexaflow-blue-800 animate-gradient-x" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-fluid text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-nexaflow-blue-50 text-nexaflow-blue-700 border border-nexaflow-blue-200 dark:bg-nexaflow-blue-900/20 dark:text-nexaflow-blue-300 dark:border-nexaflow-blue-800"
            >
              <Sparkles className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-fluid-3xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Revolutionize Your{" "}
            <span className="gradient-text">
              {displayText}
              <motion.span
                className="inline-block w-1 bg-current ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-fluid-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform your business with NexaFlow's cutting-edge AI automation
            platform. Streamline workflows, boost productivity, and unlock your
            team's potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <RippleEffect color="rgba(255, 255, 255, 0.3)">
              <Button
                size="lg"
                className="btn-glow bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0 px-8 py-6 text-base group relative overflow-hidden"
                onClick={() => scrollToSection("contact")}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </RippleEffect>

            <RippleEffect color="rgba(14, 165, 233, 0.2)">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base group border-2 hover:bg-primary/5 relative overflow-hidden"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </RippleEffect>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">99.9%</span>{" "}
                Uptime
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-nexaflow-blue-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span>{" "}
                Active Users
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-nexaflow-purple-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500M+</span>{" "}
                Tasks Automated
              </span>
            </div>
          </motion.div>

          {/* Hero Dashboard Images */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            style={{ transform: `translateY(${parallaxValue}px)` }}
          >
            {/* Main Dashboard Container */}
            <div className="relative">
              {/* Primary Dashboard - Stats */}
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 p-4 bg-gray-50/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-sm font-medium text-muted-foreground">
                    NexaFlow Analytics
                  </span>
                </div>

                <div className="p-2">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/stats-77f4c5?format=webp&width=800"
                    alt="NexaFlow Analytics Dashboard"
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-nexaflow-gradient opacity-5 animate-pulse rounded-3xl" />
              </div>

              {/* Floating Card - Graph */}
              <motion.div
                className="absolute -top-8 -right-8 lg:-right-12 w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3"
                initial={{ opacity: 0, x: 100, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                style={{ transform: `${parallax2} scale(0.9)` }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/graph-a35753?format=webp&width=800"
                  alt="Performance Analytics"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </motion.div>

              {/* Floating Card - Brand Kits */}
              <motion.div
                className="absolute -bottom-8 -left-8 lg:-left-12 w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3"
                initial={{ opacity: 0, x: -100, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                style={{ transform: `${parallax3} scale(0.85)` }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/cards-569664?format=webp&width=800"
                  alt="Brand Management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-nexaflow-electric rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium">Workflow Complete</p>
                  <p className="text-xs text-muted-foreground">
                    +47% efficiency
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-nexaflow-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs font-medium">AI Processing</p>
                  <p className="text-xs text-muted-foreground">Real-time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <button
            onClick={() => scrollToSection("features")}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">
              Discover More
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce-slow group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
