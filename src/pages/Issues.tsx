
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import IssueCard from "@/components/IssueCard";
import { searchIssues } from "@/data/issues";
import { CategoryFilter } from "@/lib/types";

const Issues = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  
  // Total number of issues from GitHub readme
  const totalIssueCount = 489;

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared.",
    });
  };

  // Modified to only use category and query for filtering
  const filteredIssues = searchIssues(query, "all", "all", category);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Kubernetes Issues</h1>
          
          <div className="bg-k8s-blue/10 border border-k8s-blue/20 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/4 flex justify-center">
                <img 
                  src="/lovable-uploads/cd8cff1f-5199-485b-aa33-4b457c006260.png" 
                  alt="K8s Issues" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-xl font-semibold mb-2">All Real-World Kubernetes Production Issues </h2>
                <p className="text-gray-700 mb-3">
                  Browse through all Kubernetes production issues collected from real-world scenarios. 
                   Use the search and filters to quickly find relevant problems, root causes, and practical solutions.
                    Special thanks to Vijay Kumar for compiling and sharing these valuable Kubernetes production issues with the community.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Author: Vijay Kumar</p>
                  <p>Source: <a href="https://github.com/vijay2181/k8s-500-prod-issues" className="text-k8s-blue hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <SearchBar query={query} setQuery={setQuery} />
            
            <FilterBar 
              category={category}
              setCategory={setCategory}
              resetFilters={resetFilters}
            />
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  {filteredIssues.length} {filteredIssues.length === 1 ? 'Issue' : 'Issues'} Found
                </h2>
              </div>
              
              {filteredIssues.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredIssues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 mx-auto text-gray-400 mb-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">No issues found</h3>
                  <p className="text-gray-500 mb-4">Try changing your search or filters</p>
                  <button
                    onClick={resetFilters}
                    className="text-k8s-blue hover:underline font-medium"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Issues;
