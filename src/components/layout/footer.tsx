import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#" },
    { label: "API", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Templates", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-nexaflow-dark via-nexaflow-blue-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-nexaflow-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexaflow-purple-400 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-nexaflow-blue-800">
        <div className="container-fluid py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with NexaFlow
            </h3>
            <p className="text-nexaflow-blue-200 mb-8 text-lg">
              Get the latest updates on new features, automation tips, and
              industry insights delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-nexaflow-blue-600 text-white placeholder:text-nexaflow-blue-300 focus:border-nexaflow-electric"
              />
              <Button className="bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark border-0 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <p className="text-xs text-nexaflow-blue-300 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container-fluid py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-nexaflow-gradient flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-nexaflow-gradient opacity-50 blur-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-2xl font-bold">NexaFlow</span>
              </div>

              <p className="text-nexaflow-blue-200 mb-6 leading-relaxed">
                Revolutionizing workflow automation with AI-powered solutions.
                Transform your business processes and unlock unprecedented
                efficiency.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-nexaflow-electric" />
                  <span className="text-sm">hello@nexaflow.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-nexaflow-electric" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-nexaflow-electric" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-nexaflow-blue-800/50 hover:bg-nexaflow-blue-700 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <FooterSection
                title="Product"
                links={footerLinks.product}
                scrollToSection={scrollToSection}
              />
              <FooterSection
                title="Company"
                links={footerLinks.company}
                scrollToSection={scrollToSection}
              />
              <FooterSection
                title="Resources"
                links={footerLinks.resources}
                scrollToSection={scrollToSection}
              />
              <FooterSection
                title="Legal"
                links={footerLinks.legal}
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-nexaflow-blue-800">
        <div className="container-fluid py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-nexaflow-blue-300">
                © 2024 NexaFlow. All rights reserved. Built for the Frontend
                Battle 2.0 competition.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-nexaflow-blue-300">
                  All systems operational
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({
  title,
  links,
  scrollToSection,
}: {
  title: string;
  links: { label: string; href: string }[];
  scrollToSection: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h4 className="font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-nexaflow-blue-200 hover:text-nexaflow-electric transition-colors"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
