import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-gradient text-white py-20"
        >
          <div className="container-custom text-center">
            <motion.h1 
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Kubernetes Troubleshooting
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
               real-world Kubernetes production issues and their solutions, all in one place.
            </motion.p>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" asChild className="bg-white text-k8s-blue hover:bg-gray-100 hover:scale-105 transition-transform">
                <Link to="/issues">Browse All Issues</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-k8s-blue hover:bg-white/20 hover:scale-105 transition-transform">
                <a 
                  href="https://github.com/suman2mark/k8s-prodisssues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source on GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <FeaturesSection />
        
        {/* Category Highlight Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12"
            >
              Explore Issue Categories
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Networking", icon: "🔌", count: 120 },
                { name: "Storage", icon: "💾", count: 85 },
                { name: "Control Plane", icon: "🎮", count: 75 },
                { name: "Workload Issues", icon: "🔄", count: 110 },
                { name: "Security", icon: "🔒", count: 50 },
                { name: "Performance", icon: "⚡", count: 60 },
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={`/issues`}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center block"
                  >
                    <span className="text-3xl mb-3">{category.icon}</span>
                    <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}+ issues</p>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-center mt-12"
            >
              <Button size="lg" asChild whileHover={{ scale: 1.05 }} className="hover:scale-105 transition-transform">
                <Link to="/issues">View All Categories</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Author Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 bg-white border-t border-gray-100"
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:w-1/3 text-center"
              >
                <div className="mb-4 mx-auto">
                  <Avatar className="w-32 h-32 border-4 border-k8s-blue mx-auto">
                    <AvatarImage src="/lovable-uploads/cd8cff1f-5199-485b-aa33-4b457c006260.png" alt="Markandeyulu" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-2xl font-bold text-k8s-navy mb-2">Markandeyulu</h3>
                <p className="text-gray-600">Kubernetes Explorer & Project Maintainer</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a href="#" className="text-gray-500 hover:text-k8s-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-k8s-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-k8s-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="md:w-1/2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-k8s-navy">About the Project</h2>
                <p className="text-gray-600 mb-4">
                  This comprehensive collection of Kubernetes troubleshooting resources was curated by Markandeyulu to help DevOps engineers, 
                  SREs, and platform teams quickly resolve common Kubernetes issues encountered in production environments.
                </p>
                <p className="text-gray-600">
                  Markandeyulu has documented the most 
                  common and challenging issues faced in real-world scenarios, along with tested solutions and best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-k8s-navy text-white"
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Kubernetes Issues?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start exploring our database of real-world Kubernetes issues and their resolutions.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button size="lg" asChild className="bg-white text-k8s-blue hover:bg-gray-100">
                <Link to="/issues">Browse All Issues</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Use K8s Troubleshooter?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-k8s-light p-6 rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Production Issues</h3>
            <p className="text-gray-600">
              All issues are collected from real-world Kubernetes production environments and common failure scenarios.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-k8s-light p-6 rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
            <p className="text-gray-600">
              Each issue comes with detailed step-by-step solutions tested in production environments.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-k8s-light p-6 rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Well Categorized</h3>
            <p className="text-gray-600">
              Issues are organized by component, severity, and category for easy navigation and filtering.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild className="bg-k8s-blue hover:bg-k8s-blue/90 text-white px-8 py-3 rounded-md transition-all">
            <Link to="/issues">Browse All Issues</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;
