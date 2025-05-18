
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CategoryFilter } from '@/lib/types';
import { Filter } from 'lucide-react';
import { getUniqueCategories } from '@/data/issues';

interface FilterBarProps {
  category: CategoryFilter;
  setCategory: (category: CategoryFilter) => void;
  resetFilters: () => void;
}

const FilterBar = ({
  category,
  setCategory,
  resetFilters
}: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Only use categories for filtering, sorted alphabetically
  const categories = ['all', ...getUniqueCategories().sort()];

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

      <div className={`grid grid-cols-1 gap-4 ${isOpen || 'hidden md:grid'}`}>
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
