import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import {
  BarChart3,
  TrendingUp,
  Palette,
  Play,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const dashboards = [
  {
    id: "analytics",
    title: "Advanced Analytics Dashboard",
    description:
      "Comprehensive portfolio carbon footprint and energy consumption tracking",
    image:
      "https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/stats-77f4c5?format=webp&width=800",
    icon: BarChart3,
    category: "Analytics",
    features: ["Real-time monitoring", "Custom KPIs", "Export capabilities"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "emissions",
    title: "Carbon Emissions Monitor",
    description:
      "Track and visualize embodied carbon emissions with detailed breakdowns",
    image:
      "https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/graph-a35753?format=webp&width=800",
    icon: TrendingUp,
    category: "Sustainability",
    features: ["Carbon tracking", "Trend analysis", "Compliance reporting"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "brands",
    title: "Brand Kit Management",
    description:
      "Organize and manage multiple brand identities with intuitive interface",
    image:
      "https://cdn.builder.io/api/v1/assets/944fb376f8e6476abb4f459945671a42/cards-569664?format=webp&width=800",
    icon: Palette,
    category: "Design",
    features: [
      "Multi-brand support",
      "Asset organization",
      "Team collaboration",
    ],
    color: "from-purple-500 to-purple-600",
  },
];

export function DashboardShowcase() {
  const [selectedDashboard, setSelectedDashboard] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const parallax1 = useParallax({ speed: 0.2, direction: "up" });
  const parallax2 = useParallax({ speed: 0.15, direction: "down" });

  const nextDashboard = () => {
    setSelectedDashboard((prev) => (prev + 1) % dashboards.length);
  };

  const prevDashboard = () => {
    setSelectedDashboard(
      (prev) => (prev - 1 + dashboards.length) % dashboards.length,
    );
  };

  const currentDashboard = dashboards[selectedDashboard];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div
        className="absolute top-20 left-20 w-96 h-96 bg-nexaflow-blue-400/5 rounded-full blur-3xl"
        style={{ transform: parallax1 }}
      />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-nexaflow-purple-400/5 rounded-full blur-3xl"
        style={{ transform: parallax2 }}
      />

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-nexaflow-blue-50 text-nexaflow-blue-700 border border-nexaflow-blue-200 dark:bg-nexaflow-blue-900/20 dark:text-nexaflow-blue-300 dark:border-nexaflow-blue-800"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Live Dashboards
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            See NexaFlow in
            <span className="gradient-text block">Action</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Explore real-world dashboard interfaces built with NexaFlow's
            powerful automation platform
          </p>
        </motion.div>

        {/* Main Dashboard Display */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dashboard Info */}
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentDashboard.color} flex items-center justify-center mr-4`}
                  >
                    <currentDashboard.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {currentDashboard.category}
                  </Badge>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {currentDashboard.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentDashboard.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {currentDashboard.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <RippleEffect>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  </RippleEffect>

                  <RippleEffect>
                    <Button
                      variant="outline"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Maximize2 className="w-4 h-4 mr-2" />
                      Full Screen
                    </Button>
                  </RippleEffect>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevDashboard}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                  {dashboards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDashboard(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedDashboard
                          ? "bg-nexaflow-blue-500 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextDashboard}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Dashboard Image with Enhanced Effects */}
            <RippleEffect className="group cursor-pointer">
              <Card
                className="relative overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-nexaflow-blue-300 transition-all duration-500 hover:shadow-2xl"
                onClick={() => setIsModalOpen(true)}
              >
                <CardContent className="p-0">
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 border-b">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="ml-4 text-sm font-medium text-muted-foreground">
                      {currentDashboard.title}
                    </span>
                  </div>

                  {/* Dashboard Image */}
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedDashboard}
                        src={currentDashboard.image}
                        alt={currentDashboard.title}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        loading="lazy"
                      />
                    </AnimatePresence>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-nexaflow-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                    {/* Interactive Hotspots */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    <div
                      className="absolute bottom-4 left-4 w-3 h-3 bg-nexaflow-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-nexaflow-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
                </CardContent>
              </Card>
            </RippleEffect>
          </motion.div>
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-7xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentDashboard.color} flex items-center justify-center`}
                  >
                    <currentDashboard.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold">{currentDashboard.title}</h3>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="relative">
                <img
                  src={currentDashboard.image}
                  alt={currentDashboard.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
