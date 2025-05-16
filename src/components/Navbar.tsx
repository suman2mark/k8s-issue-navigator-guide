
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-k8s-blue rounded p-1">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                  <path d="M15.9.476a2.14 2.14 0 0 0-.823.218L5.6 5.55A2.14 2.14 0 0 0 4.5 7.5v10a2.14 2.14 0 0 0 1.1 1.95l9.4 4.856c.52.268 1.12.268 1.64 0l9.4-4.855A2.14 2.14 0 0 0 27.14 17.5v-10a2.14 2.14 0 0 0-1.1-1.95L16.723.694a2.14 2.14 0 0 0-.822-.218zm.03 2.114l9.4 4.855v10l-9.4 4.855-9.4-4.855v-10l9.4-4.855z" fill="currentColor" />
                  <path d="M16.026 9.826L9.5 12.19v6.286l6.526 2.364 6.526-2.364V12.19l-6.526-2.364zm0 1.74l4.304 1.563-4.304 1.563-4.304-1.562 4.304-1.563zm-5.264 3.253l5.264 1.91v3.817l-5.264-1.909v-3.817zm10.528 0v3.817l-5.264 1.91v-3.818l5.264-1.909z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold ml-2 text-k8s-navy">K8s Troubleshooter</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-k8s-blue font-medium">Home</Link>
            <Link to="/issues" className="text-gray-700 hover:text-k8s-blue font-medium">Issues</Link>
          </div>
          <div>
            <Button variant="outline" className="mr-2 border-k8s-blue text-k8s-blue hover:bg-k8s-blue hover:text-white" asChild>
              <a href="https://github.com/suman2mark/k8s-prodisssues" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
