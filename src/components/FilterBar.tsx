import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ComponentFilter, SeverityFilter, CategoryFilter } from '@/lib/types';
import { Filter } from 'lucide-react';
import { getUniqueComponents, getUniqueSeverities, getUniqueCategories } from '@/data/issues';

interface FilterBarProps {
  component: ComponentFilter;
  setComponent: (component: ComponentFilter) => void;
  severity: SeverityFilter;
  setSeverity: (severity: SeverityFilter) => void;
  category: CategoryFilter;
  setCategory: (category: CategoryFilter) => void;
  resetFilters: () => void;
}

const FilterBar = ({
  component,
  setComponent,
  severity,
  setSeverity,
  category,
  setCategory,
  resetFilters
}: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const components = ['all', ...getUniqueComponents()];
  const severities = ['all', ...getUniqueSeverities()];
  const categories = ['all', ...getUniqueCategories()];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-lg font-medium">Filters</h3>
        </div>
        <div className="flex md:hidden">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        <div className="hidden md:block">
          <Button 
            variant="outline" 
            size="sm"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isOpen || 'hidden md:grid'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Component</label>
          <Select
            value={component}
            onValueChange={(value) => setComponent(value as ComponentFilter)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select component" />
            </SelectTrigger>
            <SelectContent>
              {components.map((comp) => (
                <SelectItem key={comp} value={comp}>
                  {comp === 'all' ? 'All Components' : comp}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
          <Select
            value={severity}
            onValueChange={(value) => setSeverity(value as SeverityFilter)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select severity" />
            </SelectTrigger>
            <SelectContent>
              {severities.map((sev) => (
                <SelectItem key={sev} value={sev}>
                  {sev === 'all' ? 'All Severities' : sev.charAt(0).toUpperCase() + sev.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <Select
            value={category}
            onValueChange={(value) => setCategory(value as CategoryFilter)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden">
          <Button 
            variant="outline" 
            size="sm"
            onClick={resetFilters}
            className="w-full"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
