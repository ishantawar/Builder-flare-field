import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Loader } from "@/components/layout/loader";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { MouseTrail } from "@/components/ui/mouse-trail";
import { InteractiveCursor } from "@/components/ui/interactive-cursor";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Toaster } from "@/components/ui/toaster";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <AnimatedBackground />
          <Navigation />
          <main className="relative">
            <Hero />
            <DashboardShowcase />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <MouseTrail />
          <InteractiveCursor />
          <Toaster />
        </>
      )}
    </>
  );
}
