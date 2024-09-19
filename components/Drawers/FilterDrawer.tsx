import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import FloatingButton from '../FloatingButton'
import { Product, ProductListingResponse } from '@/library/types'
import { apiService } from '@/library/services/apiService'
import { useSearchParams } from 'next/navigation'
import FilterSection from '../FIlters/NewFilter'

type PropType = {
  openFilter: boolean
  toogleFilterDrawer: () => void
}

export const FilterDrawer = ({ openFilter, toogleFilterDrawer }: PropType) => {
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<Record<string, string[]>>({})
  const [specifications, setSpecifications] = useState<Record<string, string[]>>({})
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get('s') // Extract the slug from the URL
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const fetchProductsAndSpecs = async () => {
      setLoading(true)
      try {
        const fetchedProducts: ProductListingResponse = await apiService.getProductsByCategory(categorySlug!, filters)
        setProducts(fetchedProducts?.products)
        setSpecifications(fetchedProducts.specifications) // Set specifications to display filters
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductsAndSpecs()
  }, [categorySlug, filters])

  const handleFiltersChange = (updatedFilters: Record<string, string[]>) => {
    setFilters(updatedFilters)  // Update filters state
  }

  return (
    <Drawer
      open={openFilter}
      onClose={toogleFilterDrawer}
      direction='bottom'
      zIndex={9999}
      className='h-full'
      size={"full"}
      // size={300}
      style={{
        height: "100vh"
      }}
    >
      <div className='px-4 flex w-full bg-white z-50 fixed top-0 flex-row items-center justify-between'>
        <button onClick={toogleFilterDrawer} className='w-10 h-10 text-3xl text-black'>
          <IoMdClose />
        </button>
        <h1 className='text-base text-black font-normal text-center'>Filter</h1>
        <div className="w-10"></div>
      </div>

      <div className='h-full overflow-y-scroll px-4 mt-14'>
        <FilterSection specifications={specifications} onFiltersChange={handleFiltersChange} />
      </div>



      <FloatingButton label={`See all ${products?.length} products`} onClick={toogleFilterDrawer} />
    </Drawer>
  )
}
