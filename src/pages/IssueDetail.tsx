
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { issues } from "@/data/issues";
import { ArrowLeft } from "lucide-react";

const getSeverityColor = (severity?: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const IssueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const issue = issues.find((i) => i.id === Number(id));

  if (!issue) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-custom flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Issue Not Found</h1>
            <p className="text-gray-600 mb-6">
              The issue you're looking for doesn't exist or may have been moved.
            </p>
            <Button asChild>
              <Link to="/issues">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Issues
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link to="/issues">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Issues
              </Link>
            </Button>
            
            <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h1 className="text-2xl md:text-3xl font-bold">{issue.title}</h1>
                {issue.severity && (
                  <Badge variant="outline" className={`${getSeverityColor(issue.severity)} ml-0 md:ml-4 mt-2 md:mt-0`}>
                    {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)} Severity
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {issue.component && (
                  <Badge variant="outline" className="border-k8s-blue text-k8s-blue">
                    Component: {issue.component}
                  </Badge>
                )}
                {issue.category && (
                  <Badge variant="outline" className="bg-k8s-light border-k8s-blue">
                    {issue.category}
                  </Badge>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">{issue.description}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Resolution</h2>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-line">{issue.resolution}</p>
                  </div>
                </div>

                {issue.tags && issue.tags.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {issue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Related Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {issues
                  .filter((i) => i.id !== issue.id && i.component === issue.component)
                  .slice(0, 3)
                  .map((relatedIssue) => (
                    <div key={relatedIssue.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold mb-2">
                        <Link to={`/issue/${relatedIssue.id}`} className="text-k8s-blue hover:underline">
                          {relatedIssue.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedIssue.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IssueDetail;
