import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { issues } from "@/data/issues";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-k8s-navy mb-4">
            K8s Troubleshooter
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your go-to resource for resolving real-world Kubernetes production
            issues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
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
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
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
            </div>
          </div>

          {/* Explore Issues Button - Fixed to remove framer-motion property */}
          <Link to="/issues" className="block mt-8">
            <Button
              size="lg"
              asChild
              className="bg-k8s-blue hover:bg-k8s-blue-dark text-white px-10 py-6 text-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              <span>Explore All {issues.length} Issues</span>
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
