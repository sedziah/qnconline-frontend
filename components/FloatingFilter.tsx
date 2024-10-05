import React, { useEffect, useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import { useSearchParams } from 'next/navigation'
import { Product, ProductListingResponse } from '@/library/types'
import { apiService } from '@/library/services/apiService'
import { ProductSortDrawer } from './Drawers/ProductSortDrawer'
import { FilterDrawer } from './Drawers/FilterDrawer'


const FloatingFilter = () => {
  const [openFilter, setOpenFilter] = useState(false)
  const [openSortingDrawer, setOpenSortingDrawer] = useState(false)
  const [filters, setFilters] = useState<Record<string, string[]>>({})
  const [specifications, setSpecifications] = useState<Record<string, string[]>>({})
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get('s') // Extract the slug from the URL
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const fetchProductsAndSpecs = async () => {
      try {
        const fetchedProducts: ProductListingResponse = await apiService.getProductsByCategory(categorySlug!, filters)
        setProducts(fetchedProducts?.products)
        setSpecifications(fetchedProducts.specifications) // Set specifications to display filters
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
      }
    }

    fetchProductsAndSpecs()
  }, [categorySlug, filters])

  const handleFiltersChange = (updatedFilters: Record<string, string[]>) => {
    setFilters(updatedFilters)  // Update filters state
  }

  const toggleFilterDrawer = () => setOpenFilter(!openFilter)
  const toogleOpenSortingDrawer = () => setOpenSortingDrawer(!openSortingDrawer)

  return (
    <>
      {/* Drawer for spectifications */}
      <FilterDrawer
        handleFiltersChange={handleFiltersChange}
        productCount={products?.length!}
        specifications={specifications}
        openFilter={openFilter} toggleFilterDrawer={toggleFilterDrawer} />
      

      {/* Drawer for product sorting */}
      <ProductSortDrawer
        handleFiltersChange={handleFiltersChange}
        productCount={products?.length!}
        specifications={specifications}
        openFilter={openSortingDrawer}
        toggleFilterDrawer={toogleOpenSortingDrawer} />
      
      

      <div className='block lg:hidden bg-white shadow-md transition-all border-t-2 border-lightGray/20 px-4 py-3 w-full fixed bottom-0 '>
        <div className='flex flex-row items-center justify-center w-full'>
          <button onClick={toggleFilterDrawer} className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Filters</p>
            <FaFilter />
          </button>
          <div className='h-8 w-0.5 border bg-bglight'></div>
          <button onClick={toogleOpenSortingDrawer} className='w-full justify-center h-10 flex items-center text-base flex-row gap-x-2'>
            <p>Sort</p>
            <BiSortAlt2 />
          </button>
        </div>
      </div>
    </>
  )
}

export default FloatingFilter