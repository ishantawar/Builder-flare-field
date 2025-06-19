import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-nexaflow-blue-50 via-white to-nexaflow-purple-50 dark:from-nexaflow-dark dark:via-nexaflow-blue-900/20 dark:to-nexaflow-purple-900/20 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 particles">
        <div className="absolute top-20 left-20 w-72 h-72 bg-nexaflow-blue-400/10 rounded-full blur-3xl float-1" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexaflow-purple-400/10 rounded-full blur-3xl float-2" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-nexaflow-gradient flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-nexaflow-gradient opacity-50 blur-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-3xl font-bold gradient-text">NexaFlow</span>
          </motion.div>

          {/* 404 Text */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-8xl lg:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have been automated away.
              Let's get you back to automating your workflows!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="btn-glow bg-nexaflow-gradient hover:bg-nexaflow-gradient-dark text-white border-0 px-8 py-6 text-base group"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base group border-2 hover:bg-primary/5"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-nexaflow-gradient rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Even our 404 page is automated!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
