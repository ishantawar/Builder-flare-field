import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { Check, Zap, Crown, Building, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    monthlyPrice: 9,
    yearlyPrice: 7,
    icon: Zap,
    color: "from-nexaflow-blue-500 to-nexaflow-blue-600",
    features: [
      "Up to 1,000 tasks/month",
      "5 active workflows",
      "Basic integrations",
      "Email support",
      "Template library",
      "Basic analytics",
    ],
    limitations: ["Limited AI features", "No custom integrations"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 29,
    yearlyPrice: 24,
    icon: Crown,
    color: "from-nexaflow-purple-500 to-nexaflow-purple-600",
    features: [
      "Up to 10,000 tasks/month",
      "Unlimited workflows",
      "All integrations",
      "Priority support",
      "Advanced analytics",
      "AI-powered automation",
      "Custom templates",
      "Team collaboration",
      "API access",
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    monthlyPrice: 99,
    yearlyPrice: 79,
    icon: Building,
    color: "from-nexaflow-electric to-nexaflow-blue-400",
    features: [
      "Unlimited tasks",
      "Unlimited workflows",
      "All integrations + custom",
      "24/7 dedicated support",
      "Advanced AI features",
      "White-label options",
      "SSO & advanced security",
      "Custom onboarding",
      "Success manager",
      "SLA guarantee",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const parallax1 = useParallax({ speed: 0.15, direction: "up" });

  return (
    <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nexaflow-purple-50/30 via-transparent to-nexaflow-blue-50/30 dark:from-nexaflow-purple-900/10 dark:via-transparent dark:to-nexaflow-blue-900/10" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexaflow-purple-400/5 rounded-full blur-3xl"
        style={{ transform: parallax1 }}
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
            className="mb-6 bg-nexaflow-purple-50 text-nexaflow-purple-700 border border-nexaflow-purple-200 dark:bg-nexaflow-purple-900/20 dark:text-nexaflow-purple-300 dark:border-nexaflow-purple-800"
          >
            <Crown className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            Choose Your Perfect
            <span className="gradient-text block">Automation Plan</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Start free and scale as you grow. All plans include our core
            automation features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-nexaflow-purple-500"
            />
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
            >
              Save 25%
            </Badge>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-6 py-3 rounded-full border border-green-200 dark:border-green-800">
            <Check className="w-5 h-5" />
            <span className="font-medium">
              30-day money-back guarantee on all paid plans
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  isYearly,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  isYearly: boolean;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      ref={ref}
      className={`relative ${plan.popular ? "lg:-mt-4" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge className="bg-nexaflow-gradient text-white border-0 px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      <Card
        className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl group ${
          plan.popular
            ? "border-2 border-nexaflow-purple-200 dark:border-nexaflow-purple-700 shadow-lg scale-105"
            : "border-2 border-transparent hover:border-primary/20"
        }`}
      >
        <CardHeader className="text-center pb-8">
          {/* Icon */}
          <div className="relative mb-6">
            <div
              className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <plan.icon className="w-8 h-8 text-white" />
            </div>
            <motion.div
              className={`absolute inset-0 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} opacity-30 blur-lg group-hover:blur-xl transition-all duration-300`}
              initial={false}
              whileHover={{ scale: 1.2 }}
            />
          </div>

          {/* Plan Name */}
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-muted-foreground mb-6">{plan.description}</p>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end justify-center">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-muted-foreground ml-2">
                /{isYearly ? "month" : "month"}
              </span>
            </div>
            {isYearly && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Billed annually (${price * 12}/year)
              </p>
            )}
          </div>

          {/* CTA Button */}
          <RippleEffect
            color={
              plan.popular
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(14, 165, 233, 0.2)"
            }
          >
            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0"
                  : "variant-outline hover:bg-primary/5"
              } btn-glow relative overflow-hidden`}
              size="lg"
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </RippleEffect>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              What's Included
            </h4>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.limitations.length > 0 && (
              <div className="pt-4 border-t border-muted">
                <ul className="space-y-2">
                  {plan.limitations.map((limitation) => (
                    <li
                      key={limitation}
                      className="flex items-start space-x-3 text-muted-foreground"
                    >
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 bg-gray-400 rounded-full" />
                      </div>
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
