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
        ? [...(prevFilters[filterType] || []), option]
        : prevFilters[filterType]?.filter((item) => item !== option) || [];

      const updatedFilters = {
        ...prevFilters,
        [filterType]: updatedOptions.length > 0 ? updatedOptions : [],
      };

      if (updatedFilters[filterType].length === 0) {
        delete updatedFilters[filterType];
      }

      onFiltersChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="filter-section">
      {/* Filters for Desktop */}
      <div className="hidden md:block">
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
                options={specifications[specKey]}
                selectedOptions={selectedFilters[specKey] || []}
                onChange={(option, checked) => handleFilterChange(specKey, option, checked)}
              />
            ))}
      </div>
    </div>
  );
};

export default FilterSection;
