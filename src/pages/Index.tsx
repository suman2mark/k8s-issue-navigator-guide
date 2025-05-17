
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { issues } from "@/data/issues";
import { QuestionAnswerGraphic } from "@/components/QuestionAnswerGraphic";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-k8s-navy mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            K8s Troubleshooter
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your go-to resource for resolving real-world Kubernetes production
            issues.
          </motion.p>

          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <QuestionAnswerGraphic />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-k8s-navy mb-4">
                Facing a Kubernetes challenge?
              </h2>
              <p className="text-gray-600 mb-6">
                Dive into our curated collection of {issues.length} production
                issues and their solutions. Whether it's a pod stuck in
                terminating state or a persistent volume failing to mount,
                we've got you covered.
              </p>
              <Link to="/issues" className="block mt-4">
                <Button size="lg" className="bg-k8s-blue hover:bg-k8s-blue-dark text-white px-8 py-4 text-lg shadow-md">
                  Explore Issues
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-k8s-navy mb-4">
                Contribute to the Community
              </h2>
              <p className="text-gray-600 mb-6">
                Help us expand this invaluable resource by contributing your
                own Kubernetes troubleshooting experiences. Share your insights
                and become a part of the solution.
              </p>
              <a
                href="https://github.com/suman2mark/k8s-prodisssues"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-k8s-blue hover:text-k8s-blue-dark px-8 py-4 text-lg shadow-md"
                >
                  Contribute on GitHub
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Explore Issues Button with animation */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/issues" className="inline-block">
              <Button
                size="lg"
                asChild
                className="bg-k8s-blue hover:bg-k8s-blue-dark text-white px-10 py-6 text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
              >
                <span>Explore All {issues.length} Issues</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
