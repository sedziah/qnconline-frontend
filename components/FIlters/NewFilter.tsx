import React, { useState, useEffect } from "react";
import FilterCard from "../Cards/FIlterCard"; // Corrected path
import { SpecificationOptions } from "@/library/types"; // Assuming this type is defined
import { apiService } from "@/library/services/apiService"; // API service to fetch data

interface NewFilterProps {
  categorySlug: string; // Pass the category slug to fetch relevant filters
  onFilterChange: (selectedFilters: Record<string, string>) => void; // Callback to handle filter changes
}

const NewFilter: React.FC<NewFilterProps> = ({ categorySlug, onFilterChange }) => {
  const [specifications, setSpecifications] = useState<SpecificationOptions>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  // Fetch specifications (filters) when the category slug changes
  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const { specifications } = await apiService.getProductsByCategory(categorySlug, {});
        setSpecifications(specifications);
      } catch (error) {
        console.error("Error fetching specifications:", error);
      }
    };

    if (categorySlug) {
      fetchSpecifications();
    }
  }, [categorySlug]);

  // Handle filter selection
  const handleFilterChange = (specificationName: string, value: string) => {
    const updatedFilters = {
      ...selectedFilters,
      [specificationName]: value,
    };

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters); // Trigger the callback to inform the parent component
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
  };

  return (
    <div className="hidden lg:block">
      <div id="filterSection" className="">
        {/* Map through dynamic specifications */}
        {Object.keys(specifications).map((specification) => (
          <FilterCard
            key={specification}
            label={specification}
            options={specifications[specification]} // Array of options for each filter
            selectedOption={selectedFilters[specification] || ""}
            onChange={(e) => handleFilterChange(specification, e.target.value)}
          />
        ))}
        {/* Button to reset filters */}
        <button onClick={resetFilters} className="mt-4 px-4 py-2 bg-red-500 text-white">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default NewFilter;
