import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Globe,
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  companySize: z.string().min(1, "Please select your company size"),
  interest: z.string().min(1, "Please select your primary interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@nexaflow.com",
    description: "We'll respond within 2 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    description: "123 Innovation Drive, Suite 400",
  },
  {
    icon: Globe,
    title: "Global Support",
    value: "24/7 Available",
    description: "Worldwide customer assistance",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submitted:", data);

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 2 hours.",
    });

    form.reset();

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-nexaflow-blue-50/50 to-nexaflow-purple-50/50 dark:from-nexaflow-blue-900/10 dark:to-nexaflow-purple-900/10"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-nexaflow-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexaflow-purple-400/10 rounded-full blur-3xl" />

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
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>

          <h2 className="text-fluid-2xl font-bold mb-6">
            Ready to Transform
            <span className="gradient-text block">Your Workflows?</span>
          </h2>

          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how NexaFlow can revolutionize your business
            processes. Our team of experts is ready to help you get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={titleVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground">
                  Whether you're looking to automate a simple task or transform
                  your entire organization, we're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <div className="w-12 h-12 bg-nexaflow-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-nexaflow-blue-600 dark:text-nexaflow-blue-400 font-medium">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h4 className="font-semibold mb-4">Why Choose NexaFlow?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">
                      2-hour average response time
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">
                      Free onboarding and training
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">
                      14-day free trial, no credit card required
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">
                      Dedicated customer success manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="border-2 border-nexaflow-blue-100 dark:border-nexaflow-blue-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 2
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  {...field}
                                  className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  {...field}
                                  className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email Field */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@company.com"
                                type="email"
                                {...field}
                                className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Company Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Company Name"
                                  {...field}
                                  className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="CEO, CTO, etc."
                                  {...field}
                                  className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Select Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Size</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500">
                                    <SelectValue placeholder="Select size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">
                                    1-10 employees
                                  </SelectItem>
                                  <SelectItem value="11-50">
                                    11-50 employees
                                  </SelectItem>
                                  <SelectItem value="51-200">
                                    51-200 employees
                                  </SelectItem>
                                  <SelectItem value="201-1000">
                                    201-1000 employees
                                  </SelectItem>
                                  <SelectItem value="1000+">
                                    1000+ employees
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Interest</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500">
                                    <SelectValue placeholder="What interests you?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="automation">
                                    Workflow Automation
                                  </SelectItem>
                                  <SelectItem value="integration">
                                    System Integration
                                  </SelectItem>
                                  <SelectItem value="analytics">
                                    Analytics & Reporting
                                  </SelectItem>
                                  <SelectItem value="ai">
                                    AI & Machine Learning
                                  </SelectItem>
                                  <SelectItem value="enterprise">
                                    Enterprise Solution
                                  </SelectItem>
                                  <SelectItem value="demo">
                                    Product Demo
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Message Field */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your workflow automation needs..."
                                className="min-h-[120px] border-gray-300 dark:border-gray-600 focus:border-nexaflow-blue-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <RippleEffect color="rgba(255, 255, 255, 0.3)">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full btn-glow bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0 text-base py-6 relative overflow-hidden"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Sending Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </Button>
                      </RippleEffect>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our{" "}
                        <a
                          href="#"
                          className="text-nexaflow-blue-600 hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-nexaflow-blue-600 hover:underline"
                        >
                          Terms of Service
                        </a>
                        .
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
