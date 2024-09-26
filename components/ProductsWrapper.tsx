import React, { useState, useEffect } from 'react';
import { apiService } from '@/library/services/apiService'; // Import your apiService
import NewProductCard from './Cards/NewProductCard'; // Import your product card component
import FilterSection from './Filters/NewFilter'; // Import the filter section component
import { NewPagination } from './NewPagination'; // Import your pagination component

type ProductsWrapperProps = {
  categorySlug: string;
  categoryName: string; // Accept categoryName as a prop
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ categorySlug, categoryName }) => {
  const [products, setProducts] = useState<any[]>([]); // To store the fetched products
  const [availableFilters, setAvailableFilters] = useState<Record<string, string[]>>({}); // To store available filters from API
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [totalPages, setTotalPages] = useState(1); // Total pages from backend
  const [filters, setFilters] = useState<Record<string, string[]>>({}); // Selected filters by the user

  // Fetch data from the API when categorySlug is available
  useEffect(() => {
    const fetchData = async () => {
      if (!categorySlug) return; // Only fetch products if categorySlug is defined

      setLoading(true);
      try {
        // Fetch products based on categorySlug and filters (no pagination passed)
        const fetchedData = await apiService.getProductsByCategory(categorySlug, filters);

        // Log the API response for debugging
        console.log('API Response:', fetchedData);

        // Update state with products, available filters, and pagination
        setProducts(fetchedData.products);
        setAvailableFilters(fetchedData.specifications); // Available filters from API
        setTotalPages(fetchedData.pagination.total_pages); // Total pages from API
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Fetch data when the component mounts or filters change
  }, [filters, categorySlug]); // Refetch when filters or categorySlug change

  // Handle filter change
  const handleFilterChange = (newFilters: { [key: string]: string[] }) => {
    setFilters(newFilters); // Update the filters dynamically
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main layout: Filters on the left, Products on the right */}
      <div className="flex flex-col lg:flex-row my-10 gap-6">
        
        {/* Filter Section - Left side */}
        <div className="w-full lg:w-1/4">
          <FilterSection availableFilters={availableFilters} onFiltersChange={handleFilterChange} />
        </div>

        {/* Product Grid - Right side */}
        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Shop {categoryName}</h1> {/* Use categoryName here */}
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {loading ? (
              Array(15)
                .fill({})
                ?.map((_, key) => (
                  <div key={key} className="w-full">
                    <div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))
            ) : (
              products.length > 0 ? (
                products.map((product) => (
                  <div key={product?.id} className="mx-1 py-3">
                    <NewProductCard product={product} />
                  </div>
                ))
              ) : (
                <p>No products found.</p> // Fallback if no products are available
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsWrapper;
