import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=150&h=150&fit=crop&crop=face",
    content:
      "NexaFlow transformed our entire operation. We've reduced manual work by 80% and our team can now focus on strategic initiatives rather than repetitive tasks.",
    rating: 5,
    industry: "Technology",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "DataVault Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI-powered automation capabilities are incredible. What used to take our team weeks now happens in hours, with remarkable accuracy and consistency.",
    rating: 5,
    industry: "Data Analytics",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Digital Innovation",
    company: "FinanceFirst Corp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Implementation was seamless and the ROI was evident within the first month. NexaFlow has become an essential part of our digital transformation strategy.",
    rating: 5,
    industry: "Finance",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Process Manager",
    company: "GlobalManufacturing Co.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "The visual workflow builder is intuitive and powerful. Our non-technical team members can create complex automations without any coding knowledge.",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Chief Innovation Officer",
    company: "RetailTech Dynamics",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content:
      "Customer support and platform reliability are outstanding. We've experienced zero downtime and the team is always available when we need assistance.",
    rating: 5,
    industry: "Retail",
  },
];

const companies = [
  { name: "TechFlow", logo: "TF" },
  { name: "DataVault", logo: "DV" },
  { name: "FinanceFirst", logo: "FF" },
  { name: "GlobalMfg", logo: "GM" },
  { name: "RetailTech", logo: "RT" },
  { name: "CloudScale", logo: "CS" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nexaflow-purple-50/50 via-transparent to-nexaflow-blue-50/50 dark:from-nexaflow-purple-900/10 dark:via-transparent dark:to-nexaflow-blue-900/10" />

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-nexaflow-purple-50 text-nexaflow-purple-700 border border-nexaflow-purple-200 dark:bg-nexaflow-purple-900/20 dark:text-nexaflow-purple-300 dark:border-nexaflow-purple-800"
          >
            <Star className="w-4 h-4 mr-2" />
            Customer Stories
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            Loved by Teams
            <span className="gradient-text block">Around the World</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of organizations that have transformed their
            workflows and achieved remarkable results with NexaFlow.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="relative overflow-hidden border-2 border-nexaflow-purple-100 dark:border-nexaflow-purple-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-start mb-6">
                      <Quote className="w-8 h-8 text-nexaflow-purple-400 mr-4 flex-shrink-0 mt-1" />
                      <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-14 h-14 border-2 border-nexaflow-purple-200 dark:border-nexaflow-purple-700">
                          <AvatarImage
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                          />
                          <AvatarFallback className="bg-nexaflow-purple-100 text-nexaflow-purple-700">
                            {testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <h4 className="font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-sm text-nexaflow-purple-600 dark:text-nexaflow-purple-400">
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ),
                        )}
                      </div>
                    </div>

                    {/* Industry Badge */}
                    <div className="mt-6">
                      <Badge variant="outline" className="text-xs">
                        {testimonials[currentIndex].industry}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previousTestimonial}
                className="rounded-full hover:bg-nexaflow-purple-50 hover:border-nexaflow-purple-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-nexaflow-purple-500 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-nexaflow-purple-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-nexaflow-purple-50 hover:border-nexaflow-purple-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by industry leaders worldwide
          </p>

          <div className="flex items-center justify-center space-x-8 lg:space-x-12 opacity-60 flex-wrap gap-4">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="flex items-center space-x-2 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={titleVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-nexaflow-purple-100 dark:group-hover:bg-nexaflow-purple-900 transition-colors">
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:text-nexaflow-purple-600 dark:group-hover:text-nexaflow-purple-400">
                    {company.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-nexaflow-purple-600 dark:group-hover:text-nexaflow-purple-400 transition-colors">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
