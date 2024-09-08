import React from 'react'
import ProductCard from './Cards/ProductCard'
import Filter1 from './FIlters/Filter1'

type PropType = {
  cateogry: string

}

const ProductsWrapper = ({ cateogry = "All Products" }: PropType) => {
  return (
    <>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='lg:mx-0 md:mx-4 my-10 mx-4 flex md:flex-row lg:flex-row items-center justify-between'>
          <h1 className='text-xl font-semibold capitalize'>{cateogry}</h1>


          <form className="hidden lg:block md:block">

            <select id="countries" className="bg-white border border-lightGray text-gray-900 text-sm rounded-lg focus:ring-lightGray focus:border-lightGray block w-full p-2.5 ">
              <option selected>Sort</option>
              <option value="US">Best Sellers</option>
              <option value="CA">Price: Low to High</option>
              <option value="FR">Price: High to low</option>
            </select>
          </form>

        </div>
      </div>


      <div className='my-10 lg:mx-0 md:mx-4 mx-4'>

        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-3 gap-x-6'>
          <Filter1 />
          <div className='col-span-1 md:col-span-4 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-cols-3 gap-4'>
            {Array(20)?.fill({})?.map((_, key) => <div key={key} className='mx-1 py-3'><ProductCard
            /></div>)}
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductsWrapper