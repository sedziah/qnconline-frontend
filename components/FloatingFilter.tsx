// components/FloatingFilter.tsx

import React, { useEffect } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchProductsByCategoryAndFilterQuery } from '../redux/api/features/productsApi';
import { updateFilters } from '../redux/slices/filterSlice';
import { RootState } from '../redux/store/store';
import { ProductSortDrawer } from './Drawers/ProductSortDrawer';
import { FilterDrawer } from './Drawers/FilterDrawer';
import { ProductListingResponse } from '@/library/types';

const FloatingFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter.filters);
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('s') ?? '';

  // ✅ Proper Destructuring for RTK Query
  const { data, refetch } = useFetchProductsByCategoryAndFilterQuery(
    {
      categorySlug,
      filters,
    },
    {
      // ✅ RTK Query Options (Stale-time settings)
      refetchOnMountOrArgChange: true,
      pollingInterval: 0,
    }
  );

  // ✅ Automatically Re-fetch on Filter Change
  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  // ✅ Update Redux with Filter Changes
  const handleFiltersChange = (updatedFilters: Record<string, string[]>) => {
    dispatch(updateFilters(updatedFilters));
  };

  const [openFilter, setOpenFilter] = React.useState(false);
  const [openSortingDrawer, setOpenSortingDrawer] = React.useState(false);

  const toggleFilterDrawer = () => setOpenFilter(!openFilter);
  const toggleSortingDrawer = () => setOpenSortingDrawer(!openSortingDrawer);

  return (
    <>
      {/* Drawer for Specifications */}
      <FilterDrawer
        handleFiltersChange={handleFiltersChange}
        productCount={data?.variations?.length ?? 0}
        specifications={data?.specifications ?? {}}
        openFilter={openFilter}
        toggleFilterDrawer={toggleFilterDrawer}
      />

      {/* Drawer for Sorting */}
      <ProductSortDrawer
        handleFiltersChange={handleFiltersChange}
        productCount={data?.variations?.length ?? 0}
        specifications={data?.specifications ?? {}}
        openFilter={openSortingDrawer}
        toggleFilterDrawer={toggleSortingDrawer}
      />

      {/* Floating Buttons */}
      <div className='fixed bottom-0 w-full bg-white shadow-md border-t px-4 py-3 flex justify-around'>
        <button onClick={toggleFilterDrawer} className='flex items-center gap-2 text-base'>
          <FaFilter /> Filters
        </button>
        <button onClick={toggleSortingDrawer} className='flex items-center gap-2 text-base'>
          <BiSortAlt2 /> Sort
        </button>
      </div>
    </>
  );
};

export default FloatingFilter;
