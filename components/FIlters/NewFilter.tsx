import React, { useState } from 'react';
import NewFilterCard from '../Cards/NewFilterCard';

type FilterSectionProps = {
  specifications: Record<string, string[]>; // Expect specifications
  onFiltersChange: (filters: Record<string, string[]>) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({ specifications, onFiltersChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  // Handle filter changes
  const handleFilterChange = (filterType: string, option: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedOptions = isChecked
        ? [...(prevFilters[filterType] || []), option] // Add option if checked
        : prevFilters[filterType]?.filter((item) => item !== option) || []; // Remove option if unchecked

      const updatedFilters = {
        ...prevFilters,
        [filterType]: updatedOptions.length > 0 ? updatedOptions : [], // Ensure we don't store empty arrays
      };

      if (updatedFilters[filterType].length === 0) {
        delete updatedFilters[filterType];
      }

      onFiltersChange(updatedFilters); // Pass updated filters to parent component
      return updatedFilters;
    });
  };

  return (
    <div className=''>
      {Object.keys(specifications || {}).length === 0
        ? Array(10)
            .fill({})
            .map((_, key) => (
              <div key={key} className="w-full flex flex-row items-center gap-x-3 my-2">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))
        : Object.keys(specifications).map((specKey) => (
            <NewFilterCard
              key={specKey}
              label={specKey}
              options={specifications[specKey]} // Pass options dynamically from specifications
              selectedOptions={selectedFilters[specKey] || []} // Pass selected options for each filter type
              onChange={(option, checked) => handleFilterChange(specKey, option, checked)}
            />
          ))}
    </div>
  );
};

export default FilterSection;
