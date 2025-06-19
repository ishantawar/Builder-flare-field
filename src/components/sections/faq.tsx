import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get started with NexaFlow?",
    answer:
      "You can start using NexaFlow in under 5 minutes. Simply sign up for a free account, complete the guided onboarding process, and you'll be ready to create your first automated workflow. Our intuitive interface and pre-built templates make it easy to get up and running quickly.",
  },
  {
    question: "Do I need technical knowledge to use NexaFlow?",
    answer:
      "Not at all! NexaFlow is designed for users of all technical levels. Our visual workflow builder uses a simple drag-and-drop interface that anyone can master. For advanced users, we also offer custom scripting and API integrations for more complex automation needs.",
  },
  {
    question: "What integrations does NexaFlow support?",
    answer:
      "NexaFlow integrates with over 500+ popular business applications including Slack, Salesforce, Google Workspace, Microsoft 365, Shopify, HubSpot, and many more. We also provide REST API access and webhook support for custom integrations.",
  },
  {
    question: "Is my data secure with NexaFlow?",
    answer:
      "Absolutely. We take security seriously with enterprise-grade measures including end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is encrypted both in transit and at rest, and we never share your information with third parties.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including 24/7 chat support, detailed documentation, video tutorials, webinar training sessions, and dedicated customer success managers for enterprise customers. Our average response time is under 2 hours.",
  },
  {
    question: "Can I try NexaFlow before committing to a paid plan?",
    answer:
      "Yes! We offer a free 14-day trial with full access to all features. No credit card required. You can also continue using our free plan which includes up to 1,000 tasks per month and basic integrations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is based on the number of tasks your workflows execute each month. We offer flexible plans starting from $9/month for small teams up to enterprise solutions for large organizations. All plans include unlimited workflows and users.",
  },
  {
    question: "Can I export my workflows if I decide to leave?",
    answer:
      "Yes, you own your data and workflows. You can export all your workflow configurations, data, and automation logic at any time. We also provide migration assistance to help you transition to other platforms if needed.",
  },
];

export function FAQ() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nexaflow-blue-50/30 to-nexaflow-purple-50/30 dark:via-nexaflow-blue-900/10 dark:to-nexaflow-purple-900/10" />

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
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            Got Questions?
            <span className="gradient-text block">We've Got Answers</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about NexaFlow. Can't find what
            you're looking for? Our support team is here to help.
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              defaultValue="item-0"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl px-6 data-[state=open]:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-base lg:text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm lg:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Support CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-nexaflow-blue-50 to-nexaflow-purple-50 dark:from-nexaflow-blue-900/20 dark:to-nexaflow-purple-900/20 rounded-2xl p-8 border border-nexaflow-blue-100 dark:border-nexaflow-blue-800">
              <h3 className="text-xl font-semibold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert support team is available 24/7 to help you succeed
                with NexaFlow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="hover:bg-nexaflow-blue-50 hover:border-nexaflow-blue-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button className="bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
