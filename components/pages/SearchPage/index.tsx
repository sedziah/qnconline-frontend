"use client"
import NewProductCard from '@/components/Cards/MobilePhoneCard'
import FilterSection from '@/components/FIlters/NewFilter'
import FloatingFilter from '@/components/FloatingFilter'
import { apiService } from '@/library/services/apiService'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SORTOPTION = ["Bestsellers", "Price: Low to High", "Price: High to Low"]


const SearchPage = () => {
  const params = useSearchParams()
  const searchParams = params.get('q')
  // const searchParams = "android-phones-f1aa2ed9-49db-4937-8114-f4bb83a0cd1"


  const [products, setProducts] = useState<any[]>([])
  const [availableFilters, setAvailableFilters] = useState<Record<string, string[]>>({})
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState<Record<string, string[]>>({})

  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams) return

      setLoading(true)
      try {
        const results = await apiService.searchProducts(searchParams)
        // setAvailableFilters(fetchedData.specifications)
        // setTotalPages(fetchedData.pagination.total_pages);
        setProducts(results)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [filters, searchParams])

  const handleFilterChange = (newFilters: { [key: string]: string[] }) => {
    setFilters(newFilters)
  }


  return (
    <>
      <div className="px-4 w-full max-w-6xl mx-auto">
        <div className='mt-10 flex flex-row items-center justify-between'>
          <h1 className='text-xl font-bold text-black'>
            Your search&nbsp;<span className="italic">
              {searchParams ? `: ${searchParams}` : ""}
            </span>
          </h1>

          <div className='hidden lg:block md:block'>
            <div className="relative">
              <select className="peer p-4 pe-9 block w-full bg-lightGray/20 border-transparent rounded-lg text-sm focus:border-lightGray/20 focus:ring-lightGray/20 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                <option selected={true} disabled>{SORTOPTION[SORTOPTION?.length - 1]}</option>

                {SORTOPTION?.map((option) =>
                  <option key={option} value={option} label={option}>{option}</option>)}
              </select>
              <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5  peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 ">Sort</label>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 flex flex-col lg:flex-row my-10 gap-6 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/4">
          <FilterSection specifications={availableFilters} onFiltersChange={handleFilterChange} />
        </div>

        <div className="w-full lg:w-3/4">
          {products?.length > 0 && <div className="flex items-center justify-between mb-4">
            <h1 className="text-[13px] text-black bg-lightGray/20 rounded-md p-2 font-normal">{products?.length} products</h1>
          </div>}
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
                  <NewProductCard product={{
                    ...product,
                    slug: product?.slug ?? product?.product?.slug
                  }} />
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>


      <FloatingFilter />
    </>
  )
}

export default SearchPage