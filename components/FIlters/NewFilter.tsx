import React, { useState } from 'react';
import NewFilterCard from '../Cards/NewFilterCard';

type FilterSectionProps = {
  availableFilters: Record<string, string[]>; // The filters available from the API
  onFiltersChange: (filters: Record<string, string[]>) => void; // Function to pass selected filters back to the parent
};

const FilterSection: React.FC<FilterSectionProps> = ({ availableFilters = {}, onFiltersChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  // Handle filter changes
  const handleFilterChange = (filterType: string, option: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedOptions = isChecked
        ? [...(prevFilters[filterType] || []), option] // Add option if checked
        : prevFilters[filterType]?.filter((item) => item !== option); // Remove option if unchecked

      const updatedFilters = {
        ...prevFilters,
        [filterType]: updatedOptions,
      };

      onFiltersChange(updatedFilters); // Pass updated filters to parent component
      return updatedFilters;
    });
  };

  return (
    <div>
      {/* Render loading skeletons if availableFilters is empty */}
      {Object.keys(availableFilters).length === 0
        ? Array(10)
            .fill({})
            .map((_, key) => (
              <div key={key} className="w-full flex flex-row items-center gap-x-3 my-2">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))
        : Object.keys(availableFilters).map((specKey) => (
            <NewFilterCard
              key={specKey}
              label={specKey}
              options={availableFilters[specKey]} // Pass options dynamically
              selectedOptions={selectedFilters[specKey] || []} // Pass selected options for each filter type
              onChange={(option, checked) => handleFilterChange(specKey, option, checked)}
            />
          ))}
    </div>
  );
};

export default FilterSection;
