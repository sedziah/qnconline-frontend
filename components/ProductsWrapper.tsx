import React, { useState, useEffect } from 'react';
import { apiService } from '@/library/services/apiService';
import NewProductCard from './Cards/MobilePhoneCard';
import FilterSection from "./FIlters/NewFilter";

type ProductsWrapperProps = {
  categorySlug?: string; // Make optional
  categoryName?: string; // Make optional
  searchQuery?: string;  // Add searchQuery as an optional prop
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ categorySlug, categoryName, searchQuery }) => {
  const [variations, setVariations] = useState<any[]>([]);
  const [availableFilters, setAvailableFilters] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let fetchedData;
        if (searchQuery) {
          // Fetch search results
          fetchedData = await apiService.searchProducts(searchQuery);
        } else if (categorySlug) {
          // Fetch products by category
          fetchedData = await apiService.getProductsByCategory(categorySlug, filters);
        }

        if (fetchedData) {
          setVariations(fetchedData.variations || fetchedData); // Use 'variations' if available
          setAvailableFilters(fetchedData.specifications || {}); // Use 'specifications' for filters
          setTotalPages(fetchedData.pagination?.total_pages || 1);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, categorySlug, searchQuery]);

  const handleFilterChange = (newFilters: { [key: string]: string[] }) => {
    setFilters(newFilters);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row my-10 gap-6">
        <div className="w-full lg:w-1/4">
          <FilterSection specifications={availableFilters} onFiltersChange={handleFilterChange} />
        </div>

        <div className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">
              {searchQuery ? `Search Results for "${searchQuery}"` : `Shop ${categoryName}`}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {loading ? (
              Array(15)
                .fill({})
                .map((_, key) => (
                  <div key={key} className="w-full">
                    <div className="h-40 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))
            ) : variations.length > 0 ? (
              variations.map((variation) => (
                <div key={variation?.id} className="mx-1 py-3">
                  <NewProductCard product={variation} /> {/* Pass variation as product prop */}
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsWrapper;
