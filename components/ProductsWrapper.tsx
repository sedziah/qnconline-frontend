import React, { useState, useEffect } from 'react'
import FilterSection from './FIlters/NewFilter'
import { NewPagination } from './NewPagination'
import { apiService } from '@/library/services/apiService'
import { Product, ProductListingResponse } from '@/library/types'
import NewProductCard from './Cards/NewProductCard'

type PropType = {
  categorySlug: string
  categoryName: string
}

const ProductsWrapper: React.FC<PropType> = ({ categorySlug, categoryName }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Record<string, string[]>>({})
  const [specifications, setSpecifications] = useState<Record<string, string[]>>({}) // State to hold specifications
  const [loading, setLoading] = useState(true)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch products and specifications based on category and filters
  useEffect(() => {
    const fetchProductsAndSpecs = async () => {
      setLoading(true)
      try {
        // Fetch products with pagination and filters
        const fetchedProducts: ProductListingResponse = await apiService.getProductsByCategory(categorySlug, {
          ...filters,
          page: [currentPage.toString()] // Pass the current page as a filter
        })

        setProducts(fetchedProducts.products)
        setSpecifications(fetchedProducts.specifications) // Set specifications to display filters

        // Log pagination details
        console.log('Pagination details:', fetchedProducts.pagination)

        setTotalPages(fetchedProducts.pagination.totalPages) // Update total pages
        setCurrentPage(fetchedProducts.pagination.currentPage) // Ensure current page is being updated

      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductsAndSpecs()
  }, [categorySlug, filters, currentPage])

  // Handle filter changes from FilterSection component
  const handleFiltersChange = (updatedFilters: Record<string, string[]>) => {
    setFilters(updatedFilters)  // Update filters state
    setCurrentPage(1) // Reset to the first page when filters change
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='md:mx-4 my-10 mx-4 flex md:flex-row lg:flex-row items-center justify-between'>
          <h1 className='text-xl font-semibold capitalize'>Shop {categoryName}</h1>

          <form className="hidden lg:block md:block">
            <select id="sort" className="bg-white border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-lightGray focus:border-lightGray block w-full p-2.5">
              <option selected>Sort</option>
              <option value="best-sellers">Best Sellers</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </form>
        </div>
      </div>

      <div className='my-10 md:mx-4 mx-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-3 gap-x-6'>
          {/* Pass dynamic specifications to FilterSection */}
          <div className='hidden lg:block'>
            <FilterSection specifications={specifications} onFiltersChange={handleFiltersChange} />
          </div>

          {/* Product grid */}
          <div className='col-span-1 md:col-span-4 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {loading ? (
              Array(15).fill({})?.map((_, key) => <div key={key} className='w-full'>
                <div
                  className="h-40 w-full bg-gray-200 rounded animate-pulse"
                ></div>
                <div
                  className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"
                ></div>
                <div
                  className="h-2 w-3/4 mt-2 bg-gray-200 rounded animate-pulse"
                ></div>
              </div>)
            ) : (
              products.map((product) => (
                <div key={product?.id} className='mx-1 py-3'>
                  <NewProductCard product={product} />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <NewPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>
    </>
  )
}

export default ProductsWrapper
