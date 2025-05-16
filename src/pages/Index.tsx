
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kubernetes Troubleshooting
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              500 real-world Kubernetes production issues and their solutions, all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-k8s-blue hover:bg-gray-100">
                <Link to="/issues">Browse All Issues</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
                <a 
                  href="https://github.com/vijay2181/k8s-500-prod-issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use K8s Troubleshooter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-k8s-light p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real Production Issues</h3>
                <p className="text-gray-600">
                  All 500 issues are collected from real-world Kubernetes production environments and common failure scenarios.
                </p>
              </div>
              
              <div className="bg-k8s-light p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
                <p className="text-gray-600">
                  Each issue comes with detailed step-by-step solutions tested in production environments.
                </p>
              </div>
              
              <div className="bg-k8s-light p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-k8s-blue rounded-lg flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Well Categorized</h3>
                <p className="text-gray-600">
                  Issues are organized by component, severity, and category for easy navigation and filtering.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Highlight Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Issue Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Networking", icon: "🔌", count: 120 },
                { name: "Storage", icon: "💾", count: 85 },
                { name: "Control Plane", icon: "🎮", count: 75 },
                { name: "Workload Issues", icon: "🔄", count: 110 },
                { name: "Security", icon: "🔒", count: 50 },
                { name: "Performance", icon: "⚡", count: 60 },
              ].map((category) => (
                <Link
                  key={category.name}
                  to={`/issues`}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  <span className="text-3xl mb-3">{category.icon}</span>
                  <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}+ issues</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/issues">View All Categories</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-k8s-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Kubernetes Issues?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start exploring our database of 500 real-world Kubernetes issues and their resolutions.
            </p>
            <Button size="lg" asChild className="bg-white text-k8s-blue hover:bg-gray-100">
              <Link to="/issues">Browse All Issues</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
