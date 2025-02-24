import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import NewFilterCard from "../components/Cards/NewFilterCard";

type FloatingFilterProps = {
  specifications: Record<string, string[]>; 
  onFiltersChange: (filters: Record<string, string[]>) => void;
};

const FloatingFilter: React.FC<FloatingFilterProps> = ({ specifications, onFiltersChange }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleFilterDrawer = () => setOpenFilter(!openFilter);

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

      if (typeof onFiltersChange === "function") {
        onFiltersChange(updatedFilters);
      }

      return updatedFilters;
    });
  };

  return (
    <>
      {/* ✅ Floating Filter Button (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto bg-white shadow-md border px-6 py-3 flex space-x-4 rounded-full lg:hidden">
        <button
          onClick={toggleFilterDrawer}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* ✅ Filter Drawer for Mobile */}
      {openFilter && (
        <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto lg:hidden shadow-lg">
          {/* ✅ Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={toggleFilterDrawer} className="text-gray-600 text-xl">
              ✖
            </button>
          </div>

          {/* ✅ Render Filters */}
          <div className="filter-section space-y-4">
            {Object.keys(specifications || {}).length === 0 ? (
              Array(10)
                .fill({})
                .map((_, key) => (
                  <div key={key} className="w-full flex flex-row items-center gap-x-3 my-2">
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))
            ) : (
              Object.keys(specifications).map((specKey) => (
                <NewFilterCard
                  key={specKey}
                  label={specKey}
                  options={specifications[specKey]}
                  selectedOptions={selectedFilters[specKey] || []}
                  onChange={(option, checked) => handleFilterChange(specKey, option, checked)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingFilter;
