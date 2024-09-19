import React, { useState } from 'react';
import NewFilterCard from '.././Cards/NewFilterCard';


const FilterSection = () => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    Color: [],
    Size: [],
  });

  // Handle filter changes
  const handleFilterChange = (filterType: string, option: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedOptions = isChecked
        ? [...(prevFilters[filterType] || []), option] // Add option if checked
        : prevFilters[filterType].filter((item) => item !== option); // Remove option if unchecked

      return {
        ...prevFilters,
        [filterType]: updatedOptions,
      };
    });
  };

  return (
    <div>
      <NewFilterCard
        label="Color"
        options={['Red', 'Blue', 'Green']}
        selectedOption=""
        onChange={(option, checked) => handleFilterChange('Color', option, checked)}
      />
      <NewFilterCard
        label="Size"
        options={['Small', 'Medium', 'Large']}
        selectedOption=""
        onChange={(option, checked) => handleFilterChange('Size', option, checked)}
      />
    </div>
  );
};

export default FilterSection;
