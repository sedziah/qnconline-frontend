import React, { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store/store";
import { FilterDrawer } from "./Drawers/FilterDrawer";

type FloatingFilterProps = {
  specifications?: Record<string, string[]>; // ✅ Make optional
};

const FloatingFilter: React.FC<FloatingFilterProps> = ({ specifications = {} }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter.filters);

  const handleFiltersChange = (updatedFilters: Record<string, string[]>) => {
    dispatch(updateFilters(updatedFilters));
  };

  const [openFilter, setOpenFilter] = React.useState(false);
  const toggleFilterDrawer = () => setOpenFilter(!openFilter);

  return (
    <>
      {/* ✅ Ensure specifications always has a default value */}
      <FilterDrawer
        handleFiltersChange={handleFiltersChange}
        productCount={Object.keys(specifications).length > 0 ? Object.values(specifications).flat().length : 0}
        specifications={specifications} 
        openFilter={openFilter}
        toggleFilterDrawer={toggleFilterDrawer}
      />

      {/* ✅ Floating Filter (Only visible on mobile: `lg:hidden`) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto bg-white shadow-md border px-6 py-3 flex space-x-4 rounded-full lg:hidden">
        <button
          onClick={toggleFilterDrawer}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaFilter /> Filters
        </button>
      </div>
    </>
  );
};

export default FloatingFilter;
