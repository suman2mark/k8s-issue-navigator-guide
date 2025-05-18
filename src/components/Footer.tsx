
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-k8s-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">K8s Troubleshooter</h3>
            <p className="text-gray-300">
              A comprehensive collection of real-world Kubernetes production issues and their resolutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/issues" className="text-gray-300 hover:text-white">
                  All Issues
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/suman2mark/k8s-prodisssues"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://kubernetes.io/docs/home/"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kubernetes Docs
                </a>
              </li>
              <li>
                <a
                  href="https://kubernetes.io/docs/tasks/debug/"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  K8s Troubleshooting
                </a>
              </li>
              <li>
                <a
                  href="https://kubernetes.io/blog/"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kubernetes Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} K8s Troubleshooter. All rights reserved.
          </p>
          <p className="text-gray-400">
            Data sourced from{" "}
            <a
              href="https://github.com/suman2mark/k8s-prodisssues"
              className="text-gray-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              k8s-500-prod-issues
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
