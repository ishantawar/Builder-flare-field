import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import {
  Zap,
  Brain,
  Shield,
  Workflow,
  BarChart3,
  Clock,
  Users,
  Smartphone,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description:
      "Leverage advanced machine learning algorithms to automate complex workflows and decision-making processes.",
    badge: "Smart",
    color: "from-nexaflow-blue-500 to-nexaflow-blue-600",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Create sophisticated automation workflows with our intuitive drag-and-drop interface.",
    badge: "Easy",
    color: "from-nexaflow-purple-500 to-nexaflow-purple-600",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor performance, track efficiency gains, and optimize your workflows with detailed insights.",
    badge: "Insights",
    color: "from-nexaflow-electric to-nexaflow-blue-400",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, compliance certifications, and data protection.",
    badge: "Secure",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Access and manage your workflows from anywhere with our responsive mobile application.",
    badge: "Mobile",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly collaborate with team members, assign tasks, and track progress in real-time.",
    badge: "Social",
    color: "from-pink-500 to-pink-600",
  },
];

const stats = [
  {
    label: "Time Saved",
    value: "75%",
    description: "Average workflow efficiency",
  },
  {
    label: "Error Reduction",
    value: "99.2%",
    description: "Automated accuracy",
  },
  {
    label: "Cost Savings",
    value: "$2.4M",
    description: "Customer savings annually",
  },
  {
    label: "Deployment Time",
    value: "< 5min",
    description: "Quick setup process",
  },
];

export function Features() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const parallax1 = useParallax({ speed: 0.2, direction: "down" });
  const parallax2 = useParallax({ speed: 0.3, direction: "up" });

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nexaflow-blue-50/30 to-transparent dark:via-nexaflow-blue-900/10" />
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-nexaflow-purple-400/10 rounded-full blur-3xl"
        style={{ transform: parallax1 }}
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-nexaflow-blue-400/10 rounded-full blur-3xl"
        style={{ transform: parallax2 }}
      />

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
            className="mb-6 bg-nexaflow-blue-50 text-nexaflow-blue-700 border border-nexaflow-blue-200 dark:bg-nexaflow-blue-900/20 dark:text-nexaflow-blue-300 dark:border-nexaflow-blue-800"
          >
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text block">Automate & Accelerate</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how NexaFlow's comprehensive suite of features transforms
            the way you work, making complex processes simple and efficient.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="bg-gradient-to-r from-nexaflow-blue-50 to-nexaflow-purple-50 dark:from-nexaflow-blue-900/20 dark:to-nexaflow-purple-900/20 rounded-3xl p-8 lg:p-12 border border-nexaflow-blue-100 dark:border-nexaflow-blue-800"
          initial={{ opacity: 0, y: 30 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-fluid-xl font-bold mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-muted-foreground">
              Real metrics from our growing community of successful
              organizations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-4">
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={statsVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <p className="font-semibold text-sm lg:text-base mb-1">
                  {stat.label}
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <RippleEffect color="rgba(14, 165, 233, 0.1)">
        <Card className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer">
          <CardContent className="p-6 lg:p-8">
            {/* Icon */}
            <div className="relative mb-6">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-30 blur-lg group-hover:blur-xl transition-all duration-300`}
                initial={false}
                whileHover={{ scale: 1.2 }}
              />
            </div>

            {/* Badge */}
            <Badge
              variant="secondary"
              className="mb-4 text-xs font-medium bg-muted/50"
            >
              {feature.badge}
            </Badge>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </CardContent>
        </Card>
      </RippleEffect>
    </motion.div>
  );
}
