
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import IssueCard from "@/components/IssueCard";
import { searchIssues, issues } from "@/data/issues";
import { ComponentFilter, SeverityFilter, CategoryFilter } from "@/lib/types";
import { QuestionAnswerGraphic } from "@/components/QuestionAnswerGraphic";

const Issues = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [component, setComponent] = useState<ComponentFilter>("all");
  const [severity, setSeverity] = useState<SeverityFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const resetFilters = () => {
    setQuery("");
    setComponent("all");
    setSeverity("all");
    setCategory("all");
    
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared.",
    });
  };

  const filteredIssues = searchIssues(query, component, severity, category);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Kubernetes Issues</h1>
          <p className="text-gray-600 mb-8">
            Browse through all {issues.length} Kubernetes issues. Use the search and filters to find specific problems and their solutions.
          </p>
          
          <div className="space-y-6">
            <SearchBar query={query} setQuery={setQuery} />
            
            <FilterBar 
              component={component}
              setComponent={setComponent}
              severity={severity}
              setSeverity={setSeverity}
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
                <>
                  <QuestionAnswerGraphic className="mb-8 hidden md:flex" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIssues.map((issue) => (
                      <IssueCard key={issue.id} issue={issue} />
                    ))}
                  </div>
                </>
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
