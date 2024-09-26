import React, { useState, useEffect } from 'react';
import { apiService } from '@/library/services/apiService';
import NewProductCard from './Cards/NewProductCard';
import FilterSection from './Filters/NewFilter';
import { NewPagination } from './NewPagination';

type ProductsWrapperProps = {
  categorySlug: string;
  categoryName: string;
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ categorySlug, categoryName }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [availableFilters, setAvailableFilters] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      if (!categorySlug) return;

      setLoading(true);
      try {
        const fetchedData = await apiService.getProductsByCategory(categorySlug, filters);
        setProducts(fetchedData.products);
        setAvailableFilters(fetchedData.specifications);
        setTotalPages(fetchedData.pagination.total_pages);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, categorySlug]);

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
            <h1 className="text-2xl font-bold">Shop {categoryName}</h1>
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
            ) : products.length > 0 ? (
              products.map((product) => (
                <div key={product?.id} className="mx-1 py-3">
                  <NewProductCard product={product} />
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
